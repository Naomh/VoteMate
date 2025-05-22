import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cz.vutbr.votemate',
  appName: 'VoteMate',
  webDir: 'dist/ionic/browser',
  android: {
    allowMixedContent: true,
  },
  plugins:{
    CapacitorCookies:{
      enabled:true
    },
    CapacitorHttp:{
      enabled:true
    },
    Keyboard: {
      resizeOnFullScreen: false,
    },
  }
  }

export default config;
