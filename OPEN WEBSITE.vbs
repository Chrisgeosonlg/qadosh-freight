Option Explicit

Dim shell, fileSystem, projectFolder, launcher

Set shell = CreateObject("WScript.Shell")
Set fileSystem = CreateObject("Scripting.FileSystemObject")

projectFolder = fileSystem.GetParentFolderName(WScript.ScriptFullName)
launcher = fileSystem.BuildPath(projectFolder, "Preview Website.bat")

' Run the local preview server in a minimized window. The batch launcher uses
' Vite's --open option, so the default browser opens as soon as the site is ready.
shell.Run Chr(34) & launcher & Chr(34), 7, False
