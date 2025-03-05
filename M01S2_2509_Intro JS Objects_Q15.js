let person = { role: "admin", experience: 7, active: true, department: "IT" };

let decision =
  person.role == "admin"
    ? person.active
      ? person.experience > 5
        ? person.department == "IT"
          ? "Full IT Admin Access"
          : "Full General Admin Access"
        : "Limited Admin Access"
      : "Admin Access Revoked"
    : user.role == "manager"
    ? user.active
      ? user.experience > 3
        ? user.department == "Sales"
          ? "Full Sales Manager Access"
          : "Full Manager Access"
        : "Limited Manager Access"
      : "Manager Access Revoked"
    : user.role == "user"
    ? user.active
      ? user.department == "Support"
        ? "Priority Support Access"
        : "User Access"
      : "User Access Revoked"
    : "Invalid Role";

console.log(decision);
