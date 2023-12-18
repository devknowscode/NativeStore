// const BackButton = () => (
//     <TouchableOpacity
//       style={styles.backButton}
//       onPress={() => console.log('Back button pressed')}
//     >
//       <Text style={styles.backText}>go back home</Text>
//     </TouchableOpacity>
//   );
  
//   const Header = ({ text }) => (
//     <View style={styles.header}>
//       <Text style={styles.headerText}>{text}</Text>
//     </View>
//   );
  
//   const onLoginPressed = () => {
//     // Implement your login logic here
//     console.log('Login pressed');
//   };
  
//   const FacebookButton = () => (
//     <TouchableOpacity
//       style={styles.socialFacebookButton}
//       onPress={() => console.log('Login with Facebook')}
//     >
//       <View style={styles.socialButtonContainer}>
//         <Text style={styles.buttonText}>Facebook</Text>
//       </View>
//     </TouchableOpacity>
//   );
  
//   const GoogleButton = () => (
//     <TouchableOpacity
//       style={styles.socialGoogleButton}
//       onPress={() => console.log('Login with Google')}
//     >
//       <View style={styles.socialButtonContainer}>
//         <Text style={styles.buttonText}>Google</Text>
//       </View>
//     </TouchableOpacity>
//   );





//   <View style={styles.backContainer}>
//           <BackButton />
//         </View>

//         <Header text="Welcome back." />

//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//         />

//         <View style={styles.forgotPassword}>
//           <TouchableOpacity>
//             <Text style={styles.forgot}>Forgot your password?</Text>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity style={styles.button} onPress={onLoginPressed}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <View style={styles.row}>
//           <Text>Don’t have an account? </Text>
//           <TouchableOpacity>
//             <Text style={styles.link}> Sign up</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.socialButton}>
//           <FacebookButton />
//           <GoogleButton />
//         </View>