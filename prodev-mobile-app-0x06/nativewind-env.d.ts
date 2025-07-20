/// <reference types="nativewind/types" />
declare module 'nativewind/types' {
  interface NativeWindConfig {
    theme: {
      extend: {
        colors: {
          primary: string;
          secondary: string;
        };
      };
    };
  }
}