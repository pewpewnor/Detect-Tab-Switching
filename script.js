if (typeof document.hidden !== "undefined") {
	console.log("API enabled");
	document.getElementById("info").innerHTML +=
		"Page visibility API seems to be enabled (this could be untrue)";
} else {
	console.log("API disabled");
	document.getElementById("info").innerHTML +=
		"Page visibility API seems to be disabled (still could be detected by other methods)";
}

function alertSwitchTabs(msg) {
	console.log("You switched tabs" + msg);
	document.getElementById("txt").innerHTML +=
		"You switched tabs" + msg + "\n";
	document.getElementById("title").innerHTML =
		"You have been caught cheating";
	document.getElementById("title").style.color =
		"#ff0000";
}

document.addEventListener("visibilitychange", () => {
	alertSwitchTabs(" from page visibility API detect");
});

firstTime = true;

window.addEventListener("focus", () => {
	if (firstTime) {
		firstTime = false;
	} else {
		alertSwitchTabs(" from focus detect");
	}
});

window.addEventListener("blur", () => {
	alertSwitchTabs(" from blur detect");
});

let lastActivityTime = Date.now();

function handleActivity() {
	lastActivityTime = Date.now();
}

function checkPageActivity() {
	const currentTime = Date.now();
	const inactiveTime = currentTime - lastActivityTime;

	if (inactiveTime > 1000) {
		alertSwitchTabs(
			" from time subtraction detect (although it detects when you are inactive / doing nothing so prob not realiable)"
		);
	}

	setTimeout(checkPageActivity, 1000);
}

// Attach event listeners to track activity
document.addEventListener("mousemove", handleActivity);
document.addEventListener("click", handleActivity);
document.addEventListener("keydown", handleActivity);

// Start checking for page activity
// checkPageActivity();
