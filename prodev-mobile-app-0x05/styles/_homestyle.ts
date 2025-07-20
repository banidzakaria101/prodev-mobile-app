import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  searchGroup: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
    color: "#000",
  },
  searchControl: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    height: 48,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#34967C",
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 12,
    height: 72,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    width: 72,
  },
  listingContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  paginationContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
