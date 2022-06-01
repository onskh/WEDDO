import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  navigation,
  useWindowDimensions,
} from "react-native";
import { AsyncStorage } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/button.js";
import Logo from "../components/Logo.js";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "../components/input.js";
import Background from "../assets/Background.webp";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'
// import GoogleSVG from "../assets/google.svg";
// import FacebookSVG from "../assets/facebook.svg";
// import TwitterSVG from "../assets/twitter.svg";
// import Google from "./google.js"
// import Roboto-Medium from '../assets/font/Roboto-Medium.ttf'
// import { TextInput } from "react-native-web";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "react-native-google-signin";
// const navigation = useNavigation();

// const onConfirmPressed = () => {
//   navigation.navigate("Home");
// };
// import Icon from "react-native-vector-icons/FontAwesome";
const LoginScreen = () => {
    const [password,setPassword]=useState("");
    const [email, setEmail] = useState("");
    const navigation = useNavigation();
    const onLoginPressed =()=>{
      axios
      .post("http://192.168.254.167:3000/api/sp/login", {
        password,
        email
      })
      .then(async(res)=>{
        if(res.data ==="Email or password is incorrect!"){
          // console.log(data)
          // console.log(res.result)
          console.warn("wrong password or email")
        }else{
  console.log(res.data)

  await AsyncStorage.setItem("response",JSON.stringify(res.data))

  navigation.navigate("Profile")
        }
      }).catch((err)=>console.log(err))


  };

  const { height } = useWindowDimensions();
  // const navigation = useNavigation();
  //   const myIcon = <Icon name="bird" size={30} color="#900" />;
  return (
    <ImageBackground
      style={{
        width: "100%",
        height: height,
      }}
      source={Background}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ paddingHorizontal: 25 }}>
          <View style={{ alignItems: "center" }}>
            <Logo
              height={300}
              width={300}
              style={{ transform: [{ rotate: "-5deg" }] }}
            />
          </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
              color: "#333",
              marginBottom: 30,
            }}
          >
            Login
          </Text>
          <InputField
            value={email}
            setValue={setEmail}
            label={"Write Your Email ...  "}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            keyboardType="password"
          />
          <InputField
            value={password}
            setValue={setPassword}
            label={"Password"}
            icon={
              <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
            keyboardType="password"
            inputType="password"
          />
          <InputField
            fieldButtonLabel={"Forgot?"}
            fieldButtonFunction={() => {
              onConfirmPressed();
            }}
          />
          <CustomButton
            label={"Login"}
            title="to homePage"
            onPress={onLoginPressed }
            // onPress={() => this.props.navigation.navigate("Home")}
          />
          <Text
            style={{ textAlign: "center", color: "#EBBAD2", marginBottom: 20 }}
          >
            Or, login with ...
          </Text>
          {/* <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            style={{
              borderColor: "#ffff",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            Login with Facebook
          </Icon.Button> */}
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: "#ddd",
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}
            >
              <GoogleSVG height={24} width={24} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: "#ddd",
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}
            >
              <FacebookSVG height={24} width={24} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: "#ddd",
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}
            >
              <TwitterSVG height={24} width={24} />
            </TouchableOpacity>
          </View> */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            {/* /<Text>New to the app?</Text> */}

            {/* <TouchableOpacity
              title="Register"
              onPress={() => this.props.navigation.navigate("Register")}
            > */}
              <Text style={{ color: "#AD40AF", fontWeight: "700" }} onPress={()=>{navigation.navigate('RegisterSP')}}>
                {" "}
                Register
                
              </Text>
            {/* </TouchableOpacity> */}
            {/* <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Google height={24} width={24} />
          </TouchableOpacity> */}
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default LoginScreen;

//faceBookLogin
/*        <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
        
          >
            Login with Facebook
          </Icon.Button>
          */
//faceBookLogin
/*        <Icon.Button
            name="google"
            backgroundColor="red"
        
          >
            Login with Google
          </Icon.Button>
          */
