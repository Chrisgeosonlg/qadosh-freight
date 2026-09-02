@echo off
setlocal
title Qadosh Freight - Live Preview
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed or npm is unavailable.
  echo Install Node.js from https://nodejs.org and try again.
  echo.
  pause
  exit /b 1
)

if not exist "node_modules\vite\bin\vite.js" (
  echo Preparing the website for first use...
  call npm install
  if errorlevel 1 (
    echo.
    echo The website dependencies could not be installed.
    pause
    exit /b 1
  )
)

echo Starting Qadosh Freight and opening it in your browser...
echo.
echo Keep this window open while previewing the website.
echo Close this window when you are finished.
echo.
call npm run dev -- --host 127.0.0.1 --open

if errorlevel 1 (
  echo.
  echo The preview could not start. Review the message above for details.
  pause
  exit /b 1
)

endlocal
