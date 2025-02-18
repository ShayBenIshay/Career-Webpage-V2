import { StyleSheet, Text } from "@react-pdf/renderer";
import { educationData } from "../../../data/educationData";
import { commonStyles } from "../style";

const styles = StyleSheet.create({
  ...commonStyles,
});

const PDFEducation = () => {
  return (
    <div>
      <Text style={styles.heading}>EDUCATION</Text>
      <Text style={styles.title}>
        {educationData.degree}. {educationData.school} {educationData.date}
      </Text>
      <Text style={styles.description}>{educationData.description}</Text>
      <Text style={styles.notes}></Text>
    </div>
  );
};

export default PDFEducation;
