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
					paddingBottom: 302,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 17,
						paddingHorizontal: 19,
						marginBottom: 18,
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
							marginRight: 78,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 14,
							flex: 1,
						}}>
						{"Data Science"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#555555",
						fontSize: 12,
						marginBottom: 18,
						marginLeft: 19,
					}}>
					{"Daftar Mata Kuliah"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#CCDDED",
						borderRadius: 10,
						paddingVertical: 11,
						paddingHorizontal: 12,
						marginBottom: 15,
						marginHorizontal: 19,
						shadowColor: "#0000001A",
						shadowOpacity: 0.1,
						shadowOffset: {
						    width: 0,
						    height: 2
						},
						shadowRadius: 3,
						elevation: 3,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							marginBottom: 5,
						}}>
						{"Database Engineering"}
					</Text>
					<Text 
						style = {{
							color: "#111111",
							fontSize: 8,
							marginBottom: 14,
						}}>
						{"Penjelasan data science data science data sci..."}
					</Text>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<View 
							style = {{
								width: 9,
								height: 9,
								borderColor: "#373737",
								borderRadius: 1,
								borderWidth: 1,
								marginRight: 4,
							}}>
						</View>
						<Text 
							style = {{
								color: "#111111",
								fontSize: 7,
							}}>
							{"Total: 5 Materi"}
						</Text>
						<View 
							style = {{
								flex: 1,
								alignSelf: "stretch",
							}}>
						</View>
						<View 
							style = {{
								width: 85,
								alignItems: "center",
								backgroundColor: "#0056A6",
								borderRadius: 5,
								paddingVertical: 5,
							}}>
							<Text 
								style = {{
									color: "#FFFFFF",
									fontSize: 7,
								}}>
								{"Lihat Daftar Materi"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style = {{
						backgroundColor: "#CCDDED",
						borderRadius: 10,
						paddingVertical: 11,
						paddingHorizontal: 12,
						marginHorizontal: 19,
						shadowColor: "#0000001A",
						shadowOpacity: 0.1,
						shadowOffset: {
						    width: 0,
						    height: 2
						},
						shadowRadius: 3,
						elevation: 3,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 13,
							marginBottom: 5,
						}}>
						{"Data Scientist"}
					</Text>
					<Text 
						style = {{
							color: "#111111",
							fontSize: 8,
							marginBottom: 14,
						}}>
						{"Penjelasan data science data science data sci..."}
					</Text>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<View 
							style = {{
								width: 9,
								height: 9,
								borderColor: "#373737",
								borderRadius: 1,
								borderWidth: 1,
								marginRight: 4,
							}}>
						</View>
						<Text 
							style = {{
								color: "#111111",
								fontSize: 7,
							}}>
							{"Total: 7 Materi"}
						</Text>
						<View 
							style = {{
								flex: 1,
								alignSelf: "stretch",
							}}>
						</View>
						<View 
							style = {{
								width: 85,
								alignItems: "center",
								backgroundColor: "#0056A6",
								borderRadius: 5,
								paddingVertical: 5,
							}}>
							<Text 
								style = {{
									color: "#FFFFFF",
									fontSize: 7,
								}}>
								{"Lihat Daftar Materi"}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}