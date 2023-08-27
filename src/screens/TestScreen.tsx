import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, Border, FontSize } from "../styles/GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Image
        style={[styles.groupIcon, styles.iconCardLayout]}
        resizeMode="cover"
        source={
          {
            uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
          }
        }      />
      <Text style={[styles.text, styles.textFlexBox]}>Hello Rohan!</Text>
      <Text style={[styles.currentBalance, styles.daysAgoTypo]}>
        Have a nice day.
      </Text>
      <View style={[styles.card, styles.cardLayout1]}>
        <View style={[styles.card1bgParent, styles.groupChildPosition]}>
          <LinearGradient
            style={styles.card1bg}
            locations={[0, 1]}
            colors={["#9c2cf3", "#3a49f9"]}
            useAngle={true}
            angle={177.23}
          />
          <Image
            style={[styles.card1Mask, styles.card1Position]}
            resizeMode="cover"
            source={
              {
                uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
              }
            }          />
          <Text style={[styles.text1, styles.text1Clr]}>
            Front-End Development
          </Text>
        </View>
        <Text style={[styles.currentBalance1, styles.text1Clr]}>
          October 20, 2020
        </Text>
        <View style={styles.group}>
          <View style={[styles.card1bgParent, styles.groupChildPosition]}>
            <Text style={[styles.project1, styles.project1Typo]}>
              Project 1
            </Text>
          </View>
        </View>
        <Image
          style={[styles.cardChild, styles.iconCardLayout]}
          resizeMode="cover"
          source={
            {
              uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
            }
          }
        />
      </View>
      <View style={[styles.cardDisabled, styles.cardLayout1]}>
        <View style={[styles.card1bgParent, styles.groupChildPosition]}>
          <LinearGradient
            style={styles.card1bg}
            locations={[0, 1]}
            colors={["#9c2cf3", "#3a49f9"]}
            useAngle={true}
            angle={177.23}
          />
          <Image
            style={[styles.card1Mask1, styles.card1Position]}
            resizeMode="cover"
            source={
              {
                uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
              }
            }          />
          <Text style={[styles.text1, styles.text1Clr]}>
            Back-End Development
          </Text>
        </View>
        <Text style={[styles.currentBalance1, styles.text1Clr]}>
          October 24, 2020
        </Text>
        <View style={styles.group}>
          <View style={[styles.card1bgParent, styles.groupChildPosition]}>
            <Text style={[styles.project1, styles.project1Typo]}>
              Project 2
            </Text>
          </View>
        </View>
        <Image
          style={[styles.cardChild, styles.iconCardLayout]}
          resizeMode="cover"
          source={
            {
              uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
            }
          }        />
      </View>
      <View style={[styles.group4, styles.groupPosition2]}>
        <View style={[styles.rectangleParent, styles.groupPosition1]}>
          <View style={[styles.groupChild, styles.groupChildShadowBox1]} />
          <Text style={[styles.myTasks, styles.tasksTypo]}>My Tasks</Text>
        </View>
      </View>
      <View style={[styles.group5, styles.groupPosition2]}>
        <View style={[styles.rectangleParent, styles.groupPosition1]}>
          <View style={[styles.groupItem, styles.groupChildShadowBox]} />
          <Text style={[styles.inprogress, styles.tasksTypo]}>Inprogress</Text>
        </View>
      </View>
      <View style={[styles.group6, styles.groupPosition2]}>
        <View style={[styles.rectangleParent, styles.groupPosition1]}>
          <View style={[styles.groupInner, styles.groupChildShadowBox]} />
          <Text style={[styles.completed, styles.completedPosition]}>
            Completed
          </Text>
        </View>
      </View>
      <View style={[styles.label, styles.groupPosition2]}>
        <View style={[styles.group7, styles.groupPosition]}>
          <View style={[styles.card1bgParent, styles.groupChildPosition]}>
            <View style={[styles.rectangleView, styles.groupChildShadowBox1]} />
            <Text style={[styles.myTasks1, styles.myTasks1Clr]}>My Tasks</Text>
          </View>
        </View>
        <View style={[styles.group8, styles.groupPosition]}>
          <View style={[styles.card1bgParent, styles.groupChildPosition]}>
            <View style={[styles.card1bgParent, styles.groupChildPosition]}>
              <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
              <Text style={[styles.inProgress, styles.myTasks1Clr]}>
                In-progress
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.group9, styles.groupPosition]}>
          <View style={[styles.card1bgParent, styles.groupChildPosition]}>
            <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
            <Text style={[styles.completed1, styles.myTasks1Clr]}>
              Completed
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.progress, styles.textFlexBox]}>Progress</Text>
      <LinearGradient
        style={styles.homeChild}
        locations={[0, 1]}
        colors={["#9c2cf3", "#3a49f9"]}
        useAngle={true}
        angle={177.23}
      />
      <View style={[styles.homeItem, styles.homeLayout]} />
      <View style={[styles.homeInner, styles.homeLayout]} />
      <Image
        style={[styles.vectorIcon, styles.iconCardLayout]}
        resizeMode="cover"
        source={
          {
            uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
          }
        }      />
      <View style={[styles.cardMedium, styles.cardLayout]}>
        <View style={styles.cardShadowBox} />
        <View style={styles.group10}>
          <Image
            style={[styles.vectorIcon1, styles.groupChildPosition]}
            resizeMode="cover"
            source={
              {
                uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
              }
            }          />
          <Image
            style={[styles.toDoList1Traced, styles.iconCardLayout]}
            resizeMode="cover"
            source={
              {
                uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
              }
            }          />
          <View style={[styles.group11, styles.groupPosition3]}>
            <View style={[styles.group12, styles.groupPosition3]}>
              <Text style={[styles.designChanges, styles.myTasks1Clr]}>
                Design Changes
              </Text>
            </View>
            <Text style={[styles.daysAgo, styles.daysAgoTypo]}>2 Days ago</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.iconCardLayout]}
          resizeMode="cover"
          source={
            {
              uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
            }
          }        />
      </View>
      <View style={[styles.cardMedium1, styles.cardLayout]}>
        <View style={styles.cardShadowBox} />
        <View style={styles.group10}>
          <Image
            style={[styles.vectorIcon1, styles.groupChildPosition]}
            resizeMode="cover"
            source={
              {
                uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
              }
            }          />
          <Image
            style={[styles.toDoList1Traced, styles.iconCardLayout]}
            resizeMode="cover"
            source={
              {
                uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
              }
            }          />
          <View style={[styles.group11, styles.groupPosition3]}>
            <View style={[styles.group12, styles.groupPosition3]}>
              <Text style={[styles.designChanges, styles.myTasks1Clr]}>
                Design Changes
              </Text>
            </View>
            <Text style={[styles.daysAgo, styles.daysAgoTypo]}>2 Days ago</Text>
          </View>
        </View>
        <Image
          style={[styles.cardMediumItem, styles.iconCardLayout]}
          resizeMode="cover"
          source={
            {
              uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
            }
          }        />
      </View>
      <Image
        style={styles.homeChild1}
        resizeMode="cover"
        source={
          {
            uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
          }
        }      />
      <Image
        style={styles.homeChild2}
        resizeMode="cover"
        source={
          {
            uri:'https://images.unsplash.com/photo-1689595929919-bd3b93ff27d2'
          }
        }      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconCardLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.darkslategray,
    position: "absolute",
  },
  daysAgoTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  cardLayout1: {
    height: 339,
    width: 341,
    top: 402,
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  card1Position: {
    left: "-7.04%",
    bottom: "-10.62%",
    top: "-3.49%",
    height: "114.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Clr: {
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  project1Typo: {
    fontSize: 22,
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  groupPosition2: {
    height: 70,
    top: 300,
    position: "absolute",
  },
  groupPosition1: {
    left: 0,
    top: 0,
    height: 70,
    width: 156,
  },
  groupChildShadowBox1: {
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 17,
      height: 26,
    },
    shadowColor: "rgba(226, 226, 226, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_56xl,
    position: "absolute",
  },
  tasksTypo: {
    fontSize: FontSize.size_base,
    top: "32.86%",
  },
  groupChildShadowBox: {
    backgroundColor: Color.lavender_100,
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 17,
      height: 26,
    },
    shadowColor: "rgba(226, 226, 226, 0.25)",
    borderRadius: Border.br_56xl,
    position: "absolute",
  },
  completedPosition: {
    left: "20.51%",
    fontSize: FontSize.size_base,
    top: "32.86%",
    fontFamily: FontFamily.poppinsRegular,
  },
  groupPosition: {
    width: "31.2%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  myTasks1Clr: {
    color: Color.gray,
    textAlign: "left",
    position: "absolute",
  },
  homeLayout: {
    width: 10,
    backgroundColor: Color.lavender_200,
    height: 10,
    borderRadius: Border.br_59xl,
    top: 770,
    position: "absolute",
  },
  cardLayout: {
    height: 122,
    width: 518,
    left: 53,
    position: "absolute",
  },
  groupPosition3: {
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  groupIcon: {
    height: "3.06%",
    width: "81.87%",
    top: "4.41%",
    right: "9.62%",
    bottom: "92.53%",
    left: "8.51%",
  },
  text: {
    marginTop: -521.95,
    fontSize: 46,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: "8.08%",
    textAlign: "left",
    top: "50%",
  },
  currentBalance: {
    marginTop: -454.95,
    width: "30.88%",
    fontSize: 23,
    height: 34,
    opacity: 0.54,
    color: Color.darkslategray,
    fontFamily: FontFamily.poppinsRegular,
    left: "8.08%",
    top: "50%",
  },
  card1bg: {
    height: "99.81%",
    bottom: "0.19%",
    backgroundColor: "transparent",
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  card1Mask: {
    width: "114.08%",
    right: "-7.04%",
  },
  text1: {
    width: "79.77%",
    top: "37.17%",
    fontSize: FontSize.size_14xl,
    lineHeight: 43,
    left: "10.85%",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  card1bgParent: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  currentBalance1: {
    top: "80.24%",
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    left: "10.85%",
  },
  project1: {
    color: Color.white,
    textAlign: "left",
    position: "absolute",
    height: "100%",
    fontSize: 22,
    width: "100%",
  },
  group: {
    height: "10.03%",
    width: "59.53%",
    top: "13.86%",
    right: "9.38%",
    bottom: "76.11%",
    left: "31.09%",
    position: "absolute",
  },
  cardChild: {
    height: "15.03%",
    width: "14.94%",
    top: "10.91%",
    right: "74.21%",
    bottom: "74.05%",
    left: "10.85%",
  },
  card: {
    left: 50,
  },
  card1Mask1: {
    right: "7.04%",
    width: "100%",
  },
  cardDisabled: {
    left: 415,
    opacity: 0.5,
  },
  groupChild: {
    left: 0,
    top: 0,
    height: 70,
    width: 156,
  },
  myTasks: {
    left: "28.21%",
    fontSize: FontSize.size_base,
    top: "32.86%",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.darkslategray,
    position: "absolute",
  },
  rectangleParent: {
    position: "absolute",
  },
  group4: {
    width: 156,
    height: 70,
    top: 300,
    left: 50,
  },
  groupItem: {
    left: 0,
    top: 0,
    height: 70,
    width: 156,
  },
  inprogress: {
    left: "22.44%",
    fontSize: FontSize.size_base,
    top: "32.86%",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.darkslategray,
    position: "absolute",
  },
  group5: {
    left: 222,
    width: 156,
    height: 70,
    top: 300,
  },
  groupInner: {
    left: 0,
    top: 0,
    height: 70,
    width: 156,
  },
  completed: {
    textAlign: "left",
    color: Color.darkslategray,
    position: "absolute",
  },
  group6: {
    left: 394,
    width: 156,
    height: 70,
    top: 300,
  },
  rectangleView: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  myTasks1: {
    fontSize: FontSize.size_base,
    top: "32.86%",
    left: "28.21%",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  group7: {
    right: "68.8%",
    left: "0%",
  },
  groupChild1: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  inProgress: {
    left: "19.87%",
    fontSize: FontSize.size_base,
    top: "32.86%",
    fontFamily: FontFamily.poppinsRegular,
  },
  group8: {
    right: "34.4%",
    left: "34.4%",
  },
  groupChild2: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  completed1: {
    left: "20.51%",
    fontSize: FontSize.size_base,
    top: "32.86%",
    fontFamily: FontFamily.poppinsRegular,
  },
  group9: {
    left: "68.8%",
    right: "0%",
  },
  label: {
    width: 500,
    height: 70,
    top: 300,
    left: 50,
  },
  progress: {
    top: "61.89%",
    fontSize: 32,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: "8.08%",
    textAlign: "left",
  },
  homeChild: {
    left: 270,
    width: 42,
    height: 10,
    borderRadius: Border.br_59xl,
    top: 770,
    backgroundColor: "transparent",
    position: "absolute",
  },
  homeItem: {
    left: 320,
  },
  homeInner: {
    left: 338,
  },
  vectorIcon: {
    height: "11.81%",
    width: "85.21%",
    top: "124.49%",
    right: "19.21%",
    bottom: "-36.3%",
    left: "-4.41%",
  },
  cardShadowBox: {
    elevation: 23,
    shadowRadius: 23,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 17,
      height: 26,
    },
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  vectorIcon1: {
    width: "22.25%",
    right: "77.75%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  toDoList1Traced: {
    height: "49.21%",
    width: "9.12%",
    top: "24.61%",
    right: "84.31%",
    bottom: "26.18%",
    left: "6.57%",
  },
  designChanges: {
    fontSize: 22,
    left: "0%",
    top: "0%",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  group12: {
    height: "58.7%",
    bottom: "41.3%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  daysAgo: {
    height: "43.04%",
    width: "73.53%",
    top: "56.96%",
    fontSize: 16,
    color: Color.darkgray,
    left: "0%",
  },
  group11: {
    height: "95.02%",
    width: "68.61%",
    bottom: "4.98%",
    left: "31.39%",
    right: "0%",
  },
  group10: {
    height: "49.97%",
    width: "52.9%",
    top: "24.59%",
    right: "40.93%",
    bottom: "25.44%",
    left: "6.18%",
    position: "absolute",
  },
  cardMediumItem: {
    height: "23.59%",
    width: "1.35%",
    top: "38.52%",
    right: "6.37%",
    bottom: "37.89%",
    left: "92.28%",
  },
  cardMedium: {
    top: 913,
  },
  cardMedium1: {
    top: 1055,
  },
  homeChild1: {
    top: 1106,
    left: 531,
    width: 7,
    height: 29,
    position: "absolute",
  },
  homeChild2: {
    top: 1228,
    left: 60,
    width: 495,
    height: 56,
    position: "absolute",
  },
  home: {
    backgroundColor: "#f2f5ff",
    flex: 1,
    height: 1338,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
