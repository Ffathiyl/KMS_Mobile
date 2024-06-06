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
					paddingBottom: 82,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 17,
						paddingHorizontal: 19,
						marginBottom: 19,
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
							marginRight: 50,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 14,
							flex: 1,
						}}>
						{"Materi Pembelajaran"}
					</Text>
				</View>
				<Text 
					style = {{
						color: "#555555",
						fontSize: 12,
						marginBottom: 8,
						marginLeft: 13,
					}}>
					{"About"}
				</Text>
				<View 
					style = {{
						backgroundColor: "#FFFFFF",
						borderRadius: 10,
						paddingVertical: 13,
						paddingHorizontal: 14,
						marginBottom: 15,
						marginHorizontal: 12,
						shadowColor: "#0000001A",
						shadowOpacity: 0.1,
						shadowOffset: {
						    width: 0,
						    height: 2
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 14,
							marginBottom: 12,
						}}>
						{"Stored Procedure"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 11,
							width: 268,
						}}>
						{"Deskripsi Singkat Materi lorem ipsum dolor sit \namet constructor elit pas deskripsi Singkat Materi \nlorem ipsum dolor sit amet constructor elit pas"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#FFFFFF",
						borderRadius: 10,
						padding: 15,
						marginBottom: 18,
						marginHorizontal: 13,
						shadowColor: "#0000001A",
						shadowOpacity: 0.1,
						shadowOffset: {
						    width: 0,
						    height: 2
						},
						shadowRadius: 4,
						elevation: 4,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 9,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 32,
								height: 29,
								marginRight: 16,
							}}
						/>
						<View 
							style = {{
								flex: 1,
							}}>
							<Text 
								style = {{
									color: "#0056A6",
									fontSize: 12,
									marginBottom: 9,
								}}>
								{"KMI_35_DataDefinition"}
							</Text>
							<Text 
								style = {{
									color: "#000000",
									fontSize: 9,
								}}>
								{"Author: Riesta Pinky"}
							</Text>
						</View>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<Text 
							style = {{
								color: "#565656",
								fontSize: 9,
							}}>
							{"Diunggah pada: 20 Maret 2022"}
						</Text>
						<View 
							style = {{
								width: 43,
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
								{"Unduh"}
							</Text>
						</View>
					</View>
				</View>
				<Text 
					style = {{
						color: "#555555",
						fontSize: 12,
						marginBottom: 12,
						marginLeft: 13,
					}}>
					{"Preview"}
				</Text>
				<Image
					source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style = {{
						height: 159,
						marginHorizontal: 13,
					}}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}