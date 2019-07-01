@echo off
title Thunder X BY LUOCHENZHIMU

>NUL 2>&1 REG.exe query "HKU\S-1-5-19" || (
    ECHO SET UAC = CreateObject^("Shell.Application"^) > "%TEMP%\Getadmin.vbs"
    ECHO UAC.ShellExecute "%~f0", "%1", "", "runas", 1 >> "%TEMP%\Getadmin.vbs"
    "%TEMP%\Getadmin.vbs"
    DEL /f /q "%TEMP%\Getadmin.vbs" 2>NUL
    Exit /b
)

pushd %~dp0
taskkill /f /im Thunder.exe >nul 2>nul
echo.
echo  正在卸载中...
rd/s/q "%tmp%\Xunlei" >nul 2>nul
rd/s/q "%tmp%\Thunder" >nul 2>nul
rd/s/q "%tmp%\ThunderLiveUD" >nul 2>nul
rd/s/q "%tmp%\Thunder Network" >nul 2>nul
rd/s/q "%tmp%\Xmp" >nul 2>nul
rd/s/q "%AllUsersProfile%\Application Data\Thunder Network" >nul 2>nul
rd/s/q "%AllUsersProfile%\Application Data\Xunlei" >nul 2>nul
rd/s/q "%AllUsersProfile%\Xunlei" >nul 2>nul
rd/s/q "%AllUsersProfile%\Thunder Network" >nul 2>nul
rd/s/q "%AppData%\Thunder Network" >nul 2>nul
rd/s/q "%CommonProgramFiles%\Thunder Network" >nul 2>nul
rd/s/q "%CommonProgramFiles(x86)%\Thunder Network" >nul 2>nul
rd/s/q "%UserProfile%\Local Settings\Application Data\Thunder Network" 2>nul
rd/s/q "%UserProfile%\Local Settings\Application Data\Pusher" 2>nul
rd/s/q "%UserProfile%\AppData\LocalLow\Thunder Network" >nul 2>nul
rd/s/q "%UserProfile%\AppData\LocalLow\XunLei" >nul 2>nul
rd/s/q "%UserProfile%\AppData\LocalLow\XunleiBHO" >nul 2>nul
rd/s/q "%UserProfile%\AppData\Roaming\thunderx" >nul 2>nul
rd/s/q "%UserProfile%\AppData\Roaming\迅雷" >nul 2>nul
rd/s/q "%UserProfile%\AppData\Roaming\XLGameBox" >nul 2>nul
rd/s/q "%UserProfile%\My Documents\Thunder"2>nul
rd/s/q "%AllUsersProfile%\Application Data\Thunder Network"2>nul
del/f/q "%AppData%\Microsoft\Windows\Libraries\迅雷下载.library-ms" 2>nul
del /q "Program\stat.dat" >NUL  2>NUL 
del /q "Program\latest_thunder_stat.xml" >NUL  2>NUL 
rd /s /q "Program\resources\bin\TBC\Data"2>NUL
If Exist "%PUBLIC%" rd /s/q "%PUBLIC%\Thunder Network" >nul 2>nul
If Exist "%PUBLIC%" rd /s/q "%PUBLIC%\Documents\Thunder Network" >nul 2>nul
regsvr32 /s /u "Program\np_tdieplat.dll" >nul 2>nul
regsvr32 /s /u "BHO\ThunderAgent10.1.0.1000.dll" >nul 2>nul
if exist "%WinDir%\SysWOW64" Regsvr32 /s /u "BHO\ThunderAgent649.5.62.2075.dll" >nul 2>nul
reg delete "HKLM\Software\Thunder Network" /f >nul 2>nul
reg delete "HKLM\Software\Wow6432Node\Thunder Network" /f >nul 2>nul
reg delete "HKLM\Software\Google\Chrome\NativeMessagingHosts" /f >nul 2>nul
reg delete "HKLM\Software\Wow6432Node\Google\Chrome\NativeMessagingHosts" /f >nul 2>nul
reg delete "HKCR\Xunlei.Bittorrent.6" /f >nul 2>nul
reg delete "HKCR\Xunlei.LSTFile.6" /f >nul 2>nul
reg delete "HKCR\Xunlei.TDFile.6" /f >nul 2>nul
reg delete "HKCR\Xunlei.ThunderSkin.6" /f >nul 2>nul
reg delete "HKCR\xlapp" /f >nul 2>nul
reg delete "HKCR\xlb" /f >nul 2>nul
reg delete "HKCR\.xltd" /f >nul 2>nul
reg delete "HKCR\.torrent" /f >nul 2>nul
reg delete "HKCR\.downlist" /f >nul 2>nul
reg delete "HKCR\.xlb" /f >nul 2>nul
reg delete "HKCR\.thunderskin" /f >nul 2>nul
reg delete "HKLM\Software\Classes\Xunlei.Bittorrent.6" /f >nul 2>nul
reg delete "HKLM\Software\Classes\Xunlei.LSTFile.6" /f >nul 2>nul
reg delete "HKLM\Software\Classes\Xunlei.TDFile.6" /f >nul 2>nul
reg delete "HKLM\Software\Classes\Xunlei.ThunderSkin.6" /f >nul 2>nul
reg delete "HKLM\Software\Classes\Xunlei.XLB.6" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.xltd" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.torrent" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.xlb" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.downlist" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\.thunderskin" /f >nul 2>nul
reg delete "HKCU\Software\Thunder Network" /f >nul 2>nul
reg delete "HKLM\Software\Google\Chrome\NativeMessagingHosts" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Internet Explorer\MenuExt\使用迅雷下载" /f >nul 2>nul
reg delete "HKCU\Software\Microsoft\Internet Explorer\MenuExt\使用迅雷下载全部链接" /f >nul 2>nul
reg delete "HKLM\SOFTWARE\MozillaPlugins\@xunlei.com/npxunlei;version=1.0.0.2" /f >nul 2>nul
reg delete "HKLM\SOFTWARE\Wow6432Node\MozillaPlugins\@xunlei.com/npxunlei;version=1.0.0.2" /f >nul 2>nul
del /f /q "%userprofile%"\Desktop\迅雷.lnk /f >nul 2>nul
del /f /q "%userprofile%"\桌面\迅雷.lnk /f >nul 2>nul
echo.
echo  卸载完成.
echo.
pause