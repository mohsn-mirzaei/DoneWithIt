import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

import expoPushTokensApi from "../api/expoPushTokens";
import logger from "../utility/logger";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default useNotification = (notificationListener) => {
  useEffect(() => {
    registerForPushNotification();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotification = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.projectId,
      });
      expoPushTokensApi.register(token.data);
    } catch (error) {
      logger.log("Error getting a push toekn.", error);
    }
  };
};
