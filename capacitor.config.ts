import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myapp.justin',
  appName: 'JustinDev',
  webDir: 'www',
  plugins: {
  SplashScreen: {
    launchShowDuration: 0,
    launchAutoHide: true,
    backgroundColor: "#737373",
    androidSplashResourceName: "splash",
    androidScaleType: "CENTER_CROP",
    showSpinner: false,
    androidSpinnerStyle: "large",
    iosSpinnerStyle: "small",
    spinnerColor: "#999999",
    splashFullScreen: false,
    splashImmersive: false,
    layoutName: "launch_screen",
    useDialog: false,
    },
  },
};

export default config;
