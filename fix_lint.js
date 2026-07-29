const fs = require('fs');

function replaceFileContent(file, targetRegex, replacement) {
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(targetRegex, replacement);
  fs.writeFileSync(file, content);
}

replaceFileContent('apps/frontend/src/pages/PublicCoursePage.jsx', /import { useNavigate } from "react-router-dom";/g, 'import { useNavigate } from "react-router-dom";');
// The issue is in PublicCoursePage.jsx, `navigate` is used inside a map function where it might not be in scope if not defined inside the component properly or if `navigate` wasn't assigned correctly. Let's check `PublicCoursePage.jsx`.
