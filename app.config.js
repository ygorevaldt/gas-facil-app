export default {
  expo: {
    name: "gas-facil-app",
    slug: "gas-facil-app",
    scheme: "gas-facil-app",
    version: "1.0.0",
    android: {
      package: "com.ygorevaldt.gasfacilapp",
    },
    extra: {
      API_URL: process.env.API_URL,
      eas: {
        projectId: "eb5ac0cf-5ea6-4a68-83f8-d64f3b51dd80",
      },
    },
  },
};
