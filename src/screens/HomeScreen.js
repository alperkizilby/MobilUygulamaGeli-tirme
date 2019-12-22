import React,{Component} from "react";
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from "react-native";

class TitleLogo extends Component{
	render(){
		return(
			<Image
				style={{ width: 38, height: 38}}
				source={require('../assets/header-icon.png')} />
		)
	}
}

export default class HomeScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: <TitleLogo />,
			headerRight: (
				<TouchableOpacity
					style={{ marginRight: 10 }}
					onPress={() => navigation.navigate('AboutModal')}>
					<Text style={{ color: "#333" }}>Version 1.0</Text>
				</TouchableOpacity>
			)
		}
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>Anasayfa</Text>

				<Button
					title="    Bilgileriniz     "
					onPress={() => navigate('Contact', {
						title: 'Hasta Bilgileri'
					})}
				/>

				<Button
					title="Aile hekimi 1"
					onPress={() => navigate('Detail', {
						title: 'Aile hekimi 1'
					})}
				/>
				<Button
					title="Aile hekimi 2"
					onPress={() => navigate('Detail', {
						title: 'Aile hekimi 2'
					})}
				/>
				<Button
					title="Aile hekimi 3"
					onPress={() => navigate('Detail', {
						title: 'Aile hekimi 3'
					})}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});
