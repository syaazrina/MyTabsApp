import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { seaColors } from "@/constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Subject {
  id: string;
  name: string;
  totalTime: string;
}

export default function Subjects() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [newSubject, setNewSubject] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: Fetch from Firebase
    const mockSubjects: Subject[] = [
      { id: "1", name: "Mathematics", totalTime: "12h 30m" },
      { id: "2", name: "Physics", totalTime: "8h 45m" },
      { id: "3", name: "Chemistry", totalTime: "6h 15m" },
      { id: "4", name: "Biology", totalTime: "4h 20m" },
    ];
    setSubjects(mockSubjects);
  }, []);

  const handleAddSubject = async () => {
    if (!newSubject.trim()) {
      Alert.alert("Error", "Please enter a subject name");
      return;
    }

    if (subjects.some((s) => s.name.toLowerCase() === newSubject.toLowerCase())) {
      Alert.alert("Error", "Subject already exists");
      return;
    }

    setLoading(true);
    try {
      // TODO: Save to Firebase
      const newId = (Math.max(...subjects.map(s => parseInt(s.id) || 0)) + 1).toString();
      const newSubjectObj: Subject = {
        id: newId,
        name: newSubject,
        totalTime: "0h 0m",
      };

      setSubjects([...subjects, newSubjectObj]);
      setNewSubject("");
      Alert.alert("Success", "Subject added!");
    } catch (error) {
      Alert.alert("Error", "Failed to add subject");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSubject = (id: string) => {
    Alert.alert("Delete Subject", "Remove this subject?", [
      { text: "Cancel", onPress: () => {} },
      {
        text: "Delete",
        onPress: () => {
          // TODO: Delete from Firebase
          setSubjects(subjects.filter((s) => s.id !== id));
          Alert.alert("Success", "Subject deleted");
        },
        style: "destructive",
      },
    ]);
  };

  const renderSubject = ({ item, index }: { item: Subject; index: number }) => {
    const colors = [
      seaColors.primary,
      seaColors.secondary,
      seaColors.accent,
      seaColors.border,
    ];
    const bgColor = colors[index % colors.length];

    return (
      <View style={styles.subjectCard}>
        <View style={styles.subjectContent}>
          <View style={[styles.subjectIcon, { backgroundColor: bgColor }]}>
            <FontAwesome name="book" size={20} color={seaColors.white} />
          </View>
          <View style={styles.subjectDetails}>
            <Text style={styles.subjectName}>{item.name}</Text>
            <Text style={styles.totalTime}>{item.totalTime} studied</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.deleteIconButton}
          onPress={() => handleDeleteSubject(item.id)}
        >
          <FontAwesome name="trash" size={16} color={seaColors.warning} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Add Subject Form */}
      <View style={styles.addSection}>
        <Text style={styles.sectionTitle}>Add New Subject</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Subject name"
            placeholderTextColor={seaColors.border}
            value={newSubject}
            onChangeText={setNewSubject}
          />
          <TouchableOpacity
            style={[styles.addButton, loading && styles.addButtonDisabled]}
            onPress={handleAddSubject}
            disabled={loading}
          >
            <FontAwesome name="plus" size={18} color={seaColors.white} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Subjects List */}
      <View style={styles.listSection}>
        <Text style={styles.sectionTitle}>Your Subjects</Text>
        {subjects.length > 0 ? (
          <FlatList
            data={subjects}
            renderItem={renderSubject}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            style={styles.list}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <FontAwesome
              name="inbox"
              size={40}
              color={seaColors.border}
              style={{ marginBottom: 12 }}
            />
            <Text style={styles.emptyText}>No subjects yet</Text>
            <Text style={styles.emptySubtext}>Add your first subject above</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: seaColors.light,
  },
  addSection: {
    backgroundColor: seaColors.white,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: seaColors.border,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: seaColors.darkText,
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: seaColors.light,
    borderWidth: 1,
    borderColor: seaColors.border,
    color: seaColors.darkText,
    fontSize: 14,
  },
  addButton: {
    backgroundColor: seaColors.primary,
    paddingHorizontal: 14,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  addButtonDisabled: {
    opacity: 0.6,
  },
  listSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  list: {
    marginTop: 0,
  },
  subjectCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: seaColors.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },
  subjectContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  subjectIcon: {
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  subjectDetails: {
    flex: 1,
  },
  subjectName: {
    fontSize: 15,
    fontWeight: "bold",
    color: seaColors.darkText,
    marginBottom: 4,
  },
  totalTime: {
    fontSize: 12,
    color: seaColors.border,
  },
  deleteIconButton: {
    padding: 8,
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: seaColors.darkText,
    marginBottom: 4,
  },
  emptySubtext: {
    fontSize: 13,
    color: seaColors.border,
  },
});
