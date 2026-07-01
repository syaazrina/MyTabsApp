import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { seaColors } from "../constants/colors";

export default function Home() {
  const [totalTime, setTotalTime] = useState(0);
  const [todayTime, setTodayTime] = useState(0);
  const [subjects, setSubjects] = useState<string[]>([]);

  useEffect(() => {
    setTotalTime(15);
    setTodayTime(2);
    setSubjects(["Mathematics", "Physics", "Chemistry"]);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerCard}>
        <Text style={styles.greeting}>Welcome Back! 🌊</Text>
        <Text style={styles.subGreeting}>Keep up your study momentum</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={[styles.statCard, { backgroundColor: seaColors.primary }]}>
          <Text style={styles.statLabel}>Total Study Time</Text>
          <Text style={styles.statValue}>{totalTime}h</Text>
          <Text style={styles.statSubtext}>All time</Text>
        </View>

        <View
          style={[styles.statCard, { backgroundColor: seaColors.secondary }]}
        >
          <Text style={styles.statLabel}>Today's Study</Text>
          <Text style={styles.statValue}>{todayTime}h</Text>
          <Text style={styles.statSubtext}>Great work!</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Subjects</Text>
        {subjects.length > 0 ? (
          subjects.map((subject, index) => (
            <View key={index} style={styles.subjectItem}>
              <View
                style={[
                  styles.subjectDot,
                  {
                    backgroundColor: [
                      seaColors.primary,
                      seaColors.secondary,
                      seaColors.accent,
                    ][index % 3],
                  },
                ]}
              />
              <Text style={styles.subjectText}>{subject}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>No subjects yet. Add one!</Text>
        )}
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>💡 Daily Tip</Text>
        <Text style={styles.infoText}>
          Study for 25 minutes, then take a 5-minute break for better focus!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: seaColors.light,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerCard: {
    backgroundColor: seaColors.primary,
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    elevation: 3,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: seaColors.white,
    marginBottom: 8,
  },
  subGreeting: {
    fontSize: 14,
    color: seaColors.white,
    opacity: 0.9,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  statLabel: {
    fontSize: 12,
    color: seaColors.white,
    opacity: 0.9,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: seaColors.white,
    marginBottom: 4,
  },
  statSubtext: {
    fontSize: 12,
    color: seaColors.white,
    opacity: 0.8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: seaColors.darkText,
    marginBottom: 12,
  },
  subjectItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: seaColors.white,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: seaColors.secondary,
  },
  subjectDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  subjectText: {
    fontSize: 14,
    color: seaColors.darkText,
    fontWeight: "500",
  },
  emptyText: {
    fontSize: 14,
    color: seaColors.border,
    textAlign: "center",
    paddingVertical: 16,
  },
  infoCard: {
    backgroundColor: seaColors.accent,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: seaColors.white,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 13,
    color: seaColors.white,
    opacity: 0.95,
    lineHeight: 20,
  },
});
