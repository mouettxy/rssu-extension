import fs from 'fs-extra'
import type { Manifest } from 'webextension-polyfill'
import type PkgType from '../package.json'
import { isDev, port, r } from '../scripts/utils'

export async function getManifest() {
  const pkg = await fs.readJSON(r('package.json')) as typeof PkgType

  const manifest: Manifest.WebExtensionManifest = {
    manifest_version: 2,
    name: pkg.displayName || pkg.name,
    version: pkg.version,
    description: pkg.description,
    browser_action: {
      default_icon: './assets/icon-192.png',
      default_popup: './dist/popup/index.html',
      default_title: pkg.displayName,
    },
    options_ui: {
      page: './dist/options/index.html',
      open_in_tab: true,
      chrome_style: false,
    },
    background: {
      page: './dist/background/index.html',
      persistent: false,
    },
    icons: {
      16: './assets/icon-16.png',
      48: './assets/icon-192.png',
      128: './assets/icon-192.png',
    },
    permissions: [
      'https://sdo.rgsu.net/*',
    ],
    content_scripts: [
      {
        matches: ['https://sdo.rgsu.net/*'],
        js: ['./dist/inject/index.global.js'],
        run_at: 'document_start',
        all_frames: true,
      },
      {
        matches: ['https://sdo.rgsu.net/*'],
        js: ['./dist/contentScripts/index.global.js'],
        run_at: 'document_end',
      },
    ],
    web_accessible_resources: [
      'dist/contentScripts/style.css',
    ],
  }

  if (isDev) {
    delete manifest.content_scripts
    manifest.permissions?.push('webNavigation')

    // this is required on dev for Vite script to load
    manifest.content_security_policy = `script-src \'self\' http://localhost:${port}; object-src \'self\'`
  }

  return manifest
}
