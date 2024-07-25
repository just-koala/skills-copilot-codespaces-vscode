function skillsMember() {
    var skills = document.getElementById("skills").value;
    var skills = skills.split(", ");
    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i].trim();
        if (skill.length > 0) {
            var skillNode = document.createElement("LI");
            var skillTextNode = document.createTextNode(skill);
            skillNode.appendChild(skillTextNode);
            document.getElementById("skillsList").appendChild(skillNode);
        }
    }
}