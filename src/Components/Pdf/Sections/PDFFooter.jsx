import { StyleSheet, Text, View, Link } from "@react-pdf/renderer";
import { projectsData } from "../../../data/projectsData";
import headerData from "../../../data/headerData";
import { commonStyles } from "../style";

const styles = StyleSheet.create({
  footer: {
    ...commonStyles.section,
    borderTop: "1px solid black",
    width: "100%",
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 6,
    // marginBottom: 2,
  },
  description: {
    ...commonStyles.description,
    // fontSize: 8,
    marginLeft: 0,
    marginBottom: 0,
  },
  link: {
    ...commonStyles.link,
    marginRight: 4,
    textDecoration: "underline",
    marginLeft: 0,
    marginBottom: 0,
  },
});

const PDFFooter = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.flexContainer}>
        <Text style={styles.description}>Smart Investor: </Text>
        <Link style={styles.link} href={projectsData[0].webpageUrl}>
          {projectsData[0].webpageUrl}
        </Link>
        <Text style={styles.description}>Career Webpage: </Text>
        <Link style={styles.link} href={projectsData[2].webpageUrl}>
          {projectsData[2].webpageUrl}
        </Link>
      </View>
      <View style={styles.flexContainer}>
        <Text style={styles.description}>GitHub: </Text>
        <Link style={styles.link} href={headerData.gitHub.href}>
          {headerData.gitHub.href}
        </Link>
      </View>
    </View>
  );
};

export default PDFFooter;
