const { exec } = require('child_process')

const commitMessage = process.argv[2] || 'Default commit message'

// Git 명령어 실행
exec(`git add . && git commit -m "${commitMessage}" && git push origin hyunwon`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`)
    return
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`)
    return
  }
  console.log(`stdout: ${stdout}`)
})