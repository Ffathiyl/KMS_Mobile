import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#F4F4F4",
					paddingBottom: 143,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 17,
						paddingHorizontal: 19,
						marginBottom: 15,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 1
						},
						shadowRadius: 2,
						elevation: 2,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 21,
							height: 21,
							marginRight: 55,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 14,
							flex: 1,
						}}>
						{"Program Keilmuan"}
					</Text>
				</View>
				<View 
					style = {{
						alignItems: "center",
						backgroundColor: "#0056A6",
						borderRadius: 5,
						paddingVertical: 4,
						marginBottom: 15,
						marginHorizontal: 80,
					}}>
					<Text 
						style = {{
							color: "#FFFFFF",
							fontSize: 10,
						}}>
						{"Prodi: Manajemen Informatika"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#FFFFFF",
						borderRadius: 10,
						paddingVertical: 11,
						paddingHorizontal: 12,
						marginBottom: 15,
						marginHorizontal: 19,
						shadowColor: "#00000033",
						shadowOpacity: 0.2,
						shadowOffset: {
						    width: 0,
						    height: 2
						},
						shadowRadius: 5,
						elevation: 5,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							marginBottom: 3,
						}}>
						{"Data Science"}
					</Text>
					<View 
						style = {{
							width: 88,
							height: 1,
							marginBottom: 8,
						}}>
					</View>
					<Text 
						style = {{
							color: "#111111",
							fontSize: 9,
						}}>
						{"Penjelasan data science data science data sci..."}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#FFFFFF",
						borderRadius: 10,
						padding: 12,
						marginBottom: 15,
						marginHorizontal: 19,
						shadowColor: "#00000033",
						shadowOpacity: 0.2,
						shadowOffset: {
						    width: 0,
						    height: 2
						},
						shadowRadius: 5,
						elevation: 5,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							marginBottom: 2,
						}}>
						{"Full Stack Developer"}
					</Text>
					<View 
						style = {{
							width: 144,
							height: 1,
							marginBottom: 8,
						}}>
					</View>
					<Text 
						style = {{
							color: "#111111",
							fontSize: 9,
						}}>
						{"Penjelasan data science data science data sci..."}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#FFFFFF",
						borderRadius: 10,
						paddingVertical: 11,
						paddingHorizontal: 12,
						marginBottom: 15,
						marginHorizontal: 19,
						shadowColor: "#00000033",
						shadowOpacity: 0.2,
						shadowOffset: {
						    width: 0,
						    height: 2
						},
						shadowRadius: 5,
						elevation: 5,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							marginBottom: 3,
						}}>
						{"Software & IoT engineering"}
					</Text>
					<View 
						style = {{
							width: 177,
							height: 1,
							marginBottom: 8,
						}}>
					</View>
					<Text 
						style = {{
							color: "#111111",
							fontSize: 9,
						}}>
						{"Penjelasan data science data science data sci..."}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#FFFFFF",
						borderRadius: 10,
						padding: 12,
						marginBottom: 15,
						marginHorizontal: 19,
						shadowColor: "#00000033",
						shadowOpacity: 0.2,
						shadowOffset: {
						    width: 0,
						    height: 2
						},
						shadowRadius: 5,
						elevation: 5,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							marginBottom: 2,
						}}>
						{"Produk Management"}
					</Text>
					<View 
						style = {{
							width: 139,
							height: 1,
							marginBottom: 8,
						}}>
					</View>
					<Text 
						style = {{
							color: "#111111",
							fontSize: 9,
						}}>
						{"Penjelasan data science data science data sci..."}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#FFFFFF",
						borderRadius: 10,
						paddingVertical: 11,
						paddingHorizontal: 12,
						marginHorizontal: 19,
						shadowColor: "#00000033",
						shadowOpacity: 0.2,
						shadowOffset: {
						    width: 0,
						    height: 2
						},
						shadowRadius: 5,
						elevation: 5,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							marginBottom: 3,
						}}>
						{"System Infrastructure"}
					</Text>
					<View 
						style = {{
							width: 144,
							height: 1,
							marginBottom: 8,
						}}>
					</View>
					<Text 
						style = {{
							color: "#111111",
							fontSize: 9,
						}}>
						{"Penjelasan data science data science data sci..."}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}