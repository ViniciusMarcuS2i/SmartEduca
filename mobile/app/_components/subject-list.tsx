import { FlatList, View } from "react-native";
import SubjectItem from "./subject-item";
import {
  historySubject,
  mathSubject,
  portugueseSubject,
} from "../_assets/images";

export const subjects = [
  {
    id: "0",
    subjectName: "História",
    teacherName: "Márcia Priscila",
    subjectIcon: historySubject,
    pontuation: "10",
    pontuation2: "10",
    pontuation3: "10",
    pontuation4: "10",
  },
  {
    id: "1",
    subjectName: "Matemática",
    teacherName: "Dioneide Sales",
    subjectIcon: mathSubject,
    pontuation: "7",
    pontuation2: "8",
    pontuation3: "6",
    pontuation4: "8",
  },
  {
    id: "2",
    subjectName: "Português",
    teacherName: "Lucélia Sobrenome",
    subjectIcon: portugueseSubject,
    pontuation: "5",
    pontuation2: "9",
    pontuation3: "3",
    pontuation4: "5",
  },
  {
    id: "3",
    subjectName: "Português",
    teacherName: "Rouneuane Sobrenome",
    subjectIcon: portugueseSubject,
    pontuation: "9",
    pontuation2: "8",
    pontuation3: "4",
    pontuation4: "10",
  },
  {
    id: "4",
    subjectName: "Português",
    teacherName: "Klaus Nascimento",
    subjectIcon: portugueseSubject,
    pontuation: "9",
    pontuation2: "8",
    pontuation3: "4",
    pontuation4: "10",
  },
  {
    id: "5",
    subjectName: "Português",
    teacherName: "Daniel Vale",
    subjectIcon: portugueseSubject,
    pontuation: "9",
    pontuation2: "8",
    pontuation3: "4",
    pontuation4: "10",
  },
];

function SubjectList() {
  return (
    <FlatList
      style={{ gap: 16, paddingTop: 16 }}
      data={subjects}
      renderItem={({ item }) => <SubjectItem subject={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<View className="h-36" />}
    />
  );
}

export default SubjectList;
