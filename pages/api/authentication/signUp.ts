import { Auth } from 'aws-amplify'

const signUp = async (values) => {
  const { email, password, restaurantName, description, province, city, address, postalCode, phoneNumber } = values

  await Auth.signUp({
    username: email,
    email: email,
    password: password,
    attributes: {
      'custom:restaurantName': restaurantName,
      'custom:phoneNumber': 0,
      'custom:description': description,
      'custom:province': province,
      'custom:city': city,
      'custom:address': address,
      'custom:postalCode': postalCode,
      'custom:phone': phoneNumber,
    },
  })
    .then((user) => console.log(user))
    .catch((error) => console.log('Error signing up: ', error))
}

export default signUp
