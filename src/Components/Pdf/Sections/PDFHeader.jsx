import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import headerData from "../../../data/headerData";
import PDFProfile from "./PDFProfile";
import { commonStyles } from "../style";

const styles = StyleSheet.create({
  header: {
    ...commonStyles.section,
    alignItems: "center",
    borderBottom: "1px solid black",
    paddingBottom: 4,
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  name: {
    fontSize: 22,
    color: "#001432",
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 14,
    color: "#001432",
  },
  contact: {
    flexDirection: "row",
    gap: 48,
    justifyContent: "center",
    // justifyContent: "space-around",
    marginTop: 2,
    width: "100%",
  },
  link: {
    ...commonStyles.link,
  },
});

const PDFHeader = ({ applyingFor }) => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{headerData.name}</Text>
        {applyingFor === "Software Developer" && (
          <Text style={styles.jobTitle}>{headerData.titleGeneric}</Text>
        )}
        {applyingFor === "AI & LLM Developer" && (
          <Text style={styles.jobTitle}>{headerData.titleAI}</Text>
        )}
        {applyingFor === "Full Stack Developer" && (
          <Text style={styles.jobTitle}>{headerData.titleFullStack}</Text>
        )}
        {applyingFor === "Backend Developer" && (
          <Text style={styles.jobTitle}>{headerData.titleBackend}</Text>
        )}
        {applyingFor === "Frontend Developer" && (
          <Text style={styles.jobTitle}>{headerData.titleFrontend}</Text>
        )}
      </View>
      <PDFProfile applyingFor={applyingFor} />
      <View style={styles.contact}>
        <Link style={styles.link} src={headerData.phone.href}>
          {headerData.phone.phoneNumber}
        </Link>
        <Link
          style={styles.link}
          src={`mailto:${headerData.email.emailAddress}`}
        >
          {headerData.email.emailAddress}
        </Link>
        <Text style={styles.link}>Haifa, Israel.</Text>
      </View>
    </View>
  );
};

export default PDFHeader;
