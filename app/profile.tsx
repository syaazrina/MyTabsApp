import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { seaColors } from "@/constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Profile() {
  const [userStats, setUserStats] = useState({
    totalTime: "27h 50m",
    sessions: 12,
    favoriteSubject: "Mathematics",
    userName: "Student",
    email: "student@example.com",
  });

  useEffect(() => {
    // TODO: Fetch user data from Firebase
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <FontAwesome name="user-circle" size={80} color={seaColors.secondary} />
        </View>
        <Text style={styles.userName}>{userStats.userName}</Text>
        <Text style={styles.userEmail}>{userStats.email}</Text>
      </View>

      {/* Statistics Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Statistics</Text>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {/* Total Time */}
          <View style={styles.statBox}>
            <FontAwesome
              name="clock-o"
              size={32}
              color={seaColors.primary}
              style={{ marginBottom: 8 }}
            />
            <Text style={styles.statValue}>{userStats.totalTime}</Text>
            <Text style={styles.statLabel}>Total Study Time</Text>
          </View>

          {/* Sessions */}
          <View style={styles.statBox}>
            <FontAwesome
              name="list"
              size={32}
              color={seaColors.secondary}
              style={{ marginBottom: 8 }}
            />
            <Text style={styles.statValue}>{userStats.sessions}</Text>
            <Text style={styles.statLabel}>Sessions</Text>
          </View>
        </View>

        {/* Favorite Subject */}
        <View style={styles.favoriteCard}>
          <View style={styles.favoriteIconContainer}>
            <FontAwesome name="star" size={28} color={seaColors.warning} />
          </View>
          <View style={styles.favoriteContent}>
            <Text style={styles.favoriteLabel}>Favorite Subject</Text>
            <Text style={styles.favoriteSubject}>{userStats.favoriteSubject}</Text>
          </View>
          <FontAwesome name="chevron-right" size={20} color={seaColors.border} />
        </View>
      </View>

      {/* Account Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <FontAwesome name="cog" size={20} color={seaColors.primary} />
            <Text style={styles.settingText}>App Settings</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color={seaColors.border} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <FontAwesome name="bell" size={20} color={seaColors.secondary} />
            <Text style={styles.settingText}>Notifications</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color={seaColors.border} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <FontAwesome name="info-circle" size={20} color={seaColors.accent} />
            <Text style={styles.settingText}>About</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color={seaColors.border} />
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.logoutButton}>
          <FontAwesome name="sign-out" size={18} color={seaColors.warning} />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: seaColors.light,
  },
  profileCard: {
    backgroundColor: seaColors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 16,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: seaColors.border,
  },
  avatarContainer: {
    marginBottom: 12,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: seaColors.darkText,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 13,
    color: seaColors.border,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: seaColors.darkText,
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: seaColors.white,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    elevation: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: seaColors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: seaColors.border,
    textAlign: "center",
  },
  favoriteCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: seaColors.white,
    borderRadius: 12,
    padding: 14,
    elevation: 2,
  },
  favoriteIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: seaColors.light,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  favoriteContent: {
    flex: 1,
  },
  favoriteLabel: {
    fontSize: 12,
    color: seaColors.border,
    marginBottom: 2,
  },
  favoriteSubject: {
    fontSize: 15,
    fontWeight: "bold",
    color: seaColors.darkText,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: seaColors.white,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
    elevation: 1,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingText: {
    fontSize: 14,
    color: seaColors.darkText,
    fontWeight: "500",
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: seaColors.warning,
    borderRadius: 10,
    paddingVertical: 14,
    gap: 8,
    elevation: 2,
  },
  logoutButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: seaColors.white,
  },
});
