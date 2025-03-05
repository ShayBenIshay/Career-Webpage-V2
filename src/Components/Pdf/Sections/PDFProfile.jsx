import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { aboutmeData } from "../../../data/aboutmeData";
import { commonStyles } from "../style";

const styles = StyleSheet.create({
  ...commonStyles,
  description: {
    ...commonStyles.description,
    paddingHorizontal: 20,
    textAlign: "left",
  },
});

const PDFProfile = ({ applyingFor }) => {
  return (
    <View>
      <Text style={styles.description}>
        {applyingFor === "Software Developer" && aboutmeData.generic}
        {applyingFor === "AI & LLM Developer" && aboutmeData.ai}
        {applyingFor === "Full Stack Developer" && aboutmeData.fullStack}
        {applyingFor === "Backend Developer" && aboutmeData.backend}
        {applyingFor === "Frontend Developer" && aboutmeData.frontend}
      </Text>
    </View>
  );
};

export default PDFProfile;
