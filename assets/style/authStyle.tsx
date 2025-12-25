import { StyleSheet } from "react-native";

export const authStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  branding: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    // marginBottom: 40,
    gap: 10,
    fontSize: 50,
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 16,
    marginBottom: 30,
    resizeMode: "contain",
  },
  logo2: {
    width: 120,
    height: 120,
    borderRadius: 16,
    marginBottom: 30,
    resizeMode: "contain",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 14,
  },

  forgot: {
    color: "#007AFF",
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  footerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
  },

  link: {
    color: "#007AFF",
    fontWeight: "600",
  },
});
