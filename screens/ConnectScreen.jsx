import React, { useState } from "react";
import { Dimensions, Pressable } from "react-native";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
const { width, height } = Dimensions.get("window");
const useProxy = Platform.select({ web: false, default: true });

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: "https://twitter.com/i/oauth2/authorize",
  tokenEndpoint: "https://twitter.com/i/oauth2/token",
  revocationEndpoint: "https://twitter.com/i/oauth2/revoke",
};

export default function ConnectScreen({ navigation }) {
  const connector = useWalletConnect();
  const [wallectConnected, setWalletConnected] = useState(connector.connected);
  const [discordConnected, setDiscordConnected] = useState(false);
  const [twitterConnected, setTwitterConnected] = useState(false);
  const [accessCode, setAccessCode] = useState(false);

  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "TjFtRFoxYjh3bmZwQk9aQnBlclU6MTpjaQ",
      redirectUri: makeRedirectUri({
        // scheme: "myapp",
        useProxy,
      }),
      usePKCE: true,
      scopes: ["tweet.read"],
    },
    discovery
  );

  React.useEffect(() => {
    if (response && response.type === "success") {
      const token = response.params.access_token;
      setAccessCode(token);
    }
  }, [response]);

  const connectMobileWallet = () => (
    <Pressable
      onPress={connectWallet}
      style={{
        width: "100%",
        padding: 20,
        backgroundColor: "black",
        borderRadius: 8,
        marginTop: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontFamily: "extraBold", fontSize: 24, color: "#5665F3" }}
        >
          #1
        </Text>
        <View
          style={{
            borderWidth: wallectConnected ? 0 : 1,
            borderColor: "white",
            height: 18,
            width: 18,
            borderRadius: 18,
            backgroundColor: wallectConnected && "green",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 12,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
            justifyContent: "center",
          }}
        >
          <Image
            style={{ height: 24, width: 24 }}
            source={require("../assets/images/rainbow_circular.png")}
          />
          <Image
            style={{ height: 24, width: 24, marginLeft: -10 }}
            source={require("../assets/images/metamask_circular.png")}
          />
          <Image
            style={{ height: 24, width: 24, marginLeft: -10 }}
            source={require("../assets/images/coinbase_circular.png")}
          />
        </View>
        <Text
          style={{
            fontSize: 24,
            color: "white",
            fontFamily: "medium",
            marginTop: 4,
            marginLeft: 4,
          }}
        >
          Connect Wallet
        </Text>
      </View>
    </Pressable>
  );

  const connectDiscord = () => (
    <View
      style={{
        width: "100%",
        padding: 20,
        backgroundColor: "black",
        borderRadius: 8,
        marginTop: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontFamily: "extraBold", fontSize: 24, color: "#5665F3" }}
        >
          #2
        </Text>
        <View
          style={{
            borderWidth: discordConnected ? 0 : 1,
            borderColor: "white",
            height: 18,
            width: 18,
            borderRadius: 18,
            backgroundColor: discordConnected && "green",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 12,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
            justifyContent: "center",
          }}
        >
          <Image
            style={{ height: 24, width: 24 }}
            source={require("../assets/images/rainbow_circular.png")}
          />
          <Image
            style={{ height: 24, width: 24, marginLeft: -10 }}
            source={require("../assets/images/metamask_circular.png")}
          />
          <Image
            style={{ height: 24, width: 24, marginLeft: -10 }}
            source={require("../assets/images/coinbase_circular.png")}
          />
        </View>
        <Text
          style={{
            fontSize: 24,
            color: "white",
            fontFamily: "medium",
            marginTop: 4,
            marginLeft: 4,
          }}
        >
          Connect Discord
        </Text>
      </View>
    </View>
  );

  const connectTwitter = () => (
    <Pressable
      onPress={() => {
        promptAsync({ useProxy });
      }}
      disabled={!request}
      style={{
        width: "100%",
        padding: 20,
        backgroundColor: "black",
        borderRadius: 8,
        marginTop: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontFamily: "extraBold", fontSize: 24, color: "#5665F3" }}
        >
          #3
        </Text>
        <View
          style={{
            borderWidth: twitterConnected ? 0 : 1,
            borderColor: "white",
            height: 18,
            width: 18,
            borderRadius: 18,
            backgroundColor: twitterConnected && "green",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 12,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
            justifyContent: "center",
          }}
        >
          <Image
            style={{ height: 24, width: 24 }}
            source={require("../assets/images/rainbow_circular.png")}
          />
          <Image
            style={{ height: 24, width: 24, marginLeft: -10 }}
            source={require("../assets/images/metamask_circular.png")}
          />
          <Image
            style={{ height: 24, width: 24, marginLeft: -10 }}
            source={require("../assets/images/coinbase_circular.png")}
          />
        </View>
        <Text
          style={{
            fontSize: 24,
            color: "white",
            fontFamily: "medium",
            marginTop: 4,
            marginLeft: 4,
          }}
        >
          Connect Twitter
        </Text>
      </View>
    </Pressable>
  );

  const navigateButton = () => (
    <View
      style={{
        backgroundColor: "#5665F3",
        padding: 16,
        width: "100%",
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        borderRadius: 8,
        opacity:
          wallectConnected && discordConnected && twitterConnected ? 1 : 0.2,
      }}
    >
      <Text style={{ color: "white", alignSelf: "center", fontFamily: "logo" }}>
        {accessCode || "Let's Join In"}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {connectMobileWallet()}
        {connectDiscord()}
        {connectTwitter()}
      </View>
      {navigateButton()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#37393F",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
