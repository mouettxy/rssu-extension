import { computed } from "vue";

export function useVModel<P extends Object, K extends keyof P>(
  props: P,
  key: K,
  emit: (name: any, ...args: any[]) => void
) {
  const event = `update:${key}`;

  return computed<P[K]>({
    get() {
      return props[key];
    },
    set(value) {
      emit(event, value);
    },
  });
}
