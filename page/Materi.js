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
					paddingBottom: 236,
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
							marginRight: 58,
						}}
					/>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 14,
							flex: 1,
						}}>
						{"Materi Tersimpan"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#0056A6",
						borderRadius: 10,
						paddingVertical: 7,
						paddingHorizontal: 12,
						marginBottom: 15,
						marginHorizontal: 20,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 13,
						}}>
						<View 
							style = {{
								width: 37,
								height: 37,
								borderColor: "#FFFFFF",
								borderRadius: 4,
								borderWidth: 1,
								marginRight: 13,
							}}>
						</View>
						<View 
							style = {{
								flex: 1,
								marginRight: 4,
							}}>
							<Text 
								style = {{
									color: "#FFFFFF",
									fontSize: 13,
									marginBottom: 8,
								}}>
								{"Materi: DML SQL Server"}
							</Text>
							<Text 
								style = {{
									color: "#FFFFFF",
									fontSize: 9,
								}}>
								{"Program: Database Engineering"}
							</Text>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 11,
								height: 16,
							}}
						/>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 9,
								marginRight: 4,
								flex: 1,
							}}>
							{"Author: Indah Cythia"}
						</Text>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 9,
							}}>
							{"20 Maret 2022"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						backgroundColor: "#0056A6",
						borderRadius: 10,
						paddingVertical: 7,
						paddingHorizontal: 12,
						marginBottom: 15,
						marginHorizontal: 20,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 13,
						}}>
						<View 
							style = {{
								width: 37,
								height: 37,
								borderColor: "#FFFFFF",
								borderRadius: 4,
								borderWidth: 1,
								marginRight: 13,
							}}>
						</View>
						<View 
							style = {{
								flex: 1,
								marginRight: 4,
							}}>
							<Text 
								style = {{
									color: "#FFFFFF",
									fontSize: 13,
									marginBottom: 8,
								}}>
								{"Materi: Stored Procedure"}
							</Text>
							<Text 
								style = {{
									color: "#FFFFFF",
									fontSize: 9,
								}}>
								{"Program: Database Engineering"}
							</Text>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 11,
								height: 16,
							}}
						/>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 9,
								marginRight: 4,
								flex: 1,
							}}>
							{"Author: Indah Cythia"}
						</Text>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 9,
							}}>
							{"20 Maret 2022"}
						</Text>
					</View>
				</View>
				<View 
					style = {{
						backgroundColor: "#0056A6",
						borderRadius: 10,
						paddingVertical: 7,
						paddingHorizontal: 12,
						marginHorizontal: 20,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 13,
						}}>
						<View 
							style = {{
								width: 37,
								height: 37,
								borderColor: "#FFFFFF",
								borderRadius: 4,
								borderWidth: 1,
								marginRight: 13,
							}}>
						</View>
						<View 
							style = {{
								flex: 1,
								marginRight: 4,
							}}>
							<Text 
								style = {{
									color: "#FFFFFF",
									fontSize: 13,
									marginBottom: 9,
									marginLeft: 1,
								}}>
								{"Materi: Trigger Table"}
							</Text>
							<Text 
								style = {{
									color: "#FFFFFF",
									fontSize: 9,
								}}>
								{"Program: Database Engineering"}
							</Text>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 11,
								height: 16,
							}}
						/>
					</View>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 9,
								marginRight: 4,
								flex: 1,
							}}>
							{"Author: Indah Cythia"}
						</Text>
						<Text 
							style = {{
								color: "#FFFFFF",
								fontSize: 9,
							}}>
							{"20 Maret 2022"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}