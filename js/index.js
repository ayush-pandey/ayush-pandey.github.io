const jqueryScript = document.createElement("script");
jqueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js";
jqueryScript.onload = () => console.log("jQuery loaded");
document.head.appendChild(jqueryScript);

// Ensure YouTube videos are responsive
document.addEventListener("DOMContentLoaded", function () {
    if (typeof YOUTUBE_VIDEO_MARGIN == "undefined") {
        YOUTUBE_VIDEO_MARGIN = 5;
    }

    document.querySelectorAll("iframe").forEach(function (item) {
        if (item.src.match(/(https?:)?\/\/www\.youtube\.com/)) {
            let w = item.getAttribute("width");
            let h = item.getAttribute("height");
            let ar = (h / w) * 100;
            ar = ar.toFixed(2);

             if(typeof YOUTUBE_VIDEO_MARGIN == 'undefined') {
            YOUTUBE_VIDEO_MARGIN=5;
        }
            item.style.position = "absolute";
            item.style.top = "0";
            item.style.left = "0";
            item.style.width = "100%";
            item.style.height = "100%";
            item.style.float = "right";
            item.style.marginLeft = "2px";
            item.style.maxWidth = w + "px";
            item.style.maxHeight = h + "px";

            let wrapper = document.createElement("div");
            wrapper.style.maxWidth = w + "px";
            wrapper.style.margin = "0 auto";
            wrapper.style.padding = YOUTUBE_VIDEO_MARGIN + "px";

            let outerWrapper = document.createElement("div");
            outerWrapper.style.position = "relative";
            outerWrapper.style.paddingBottom = ar + "%";
            outerWrapper.style.height = "0";
            outerWrapper.style.overflow = "hidden";

            outerWrapper.appendChild(item.cloneNode(true));
            wrapper.appendChild(outerWrapper);
            item.replaceWith(wrapper);
        }
    });

    // Fetch the last commit date from GitHub
    async function fetchLastCommitDate() {
        try {
            const currentFilePath = window.location.pathname.split("/").pop();
            const response = await fetch(`https://api.github.com/repos/ayush-pandey/ayush-pandey.github.io/commits?path=${currentFilePath}&sha=master`);
            if (!response.ok) {
                throw new Error("Error fetching commit history for the file.");
            }
            
            const data = await response.json();

            // If there are commits for this file, get the most recent one
            if (data.length > 0) {
                const lastUpdatedDate = new Date(data[0].commit.committer.date).toLocaleDateString('en-US', {
                    month: 'long',    // Full month name (e.g., January, February)
                    day: 'numeric',   // Day of the month
                    year: 'numeric'   // Full year (e.g., 2024)
                });

                document.getElementById("last-updated").textContent = `Last updated: ${lastUpdatedDate}`;
            } else {
                document.getElementById("last-updated").textContent = "Last updated: No commits found";
            }
        } catch (error) {
            console.error("Error fetching last commit date:", error);
            document.getElementById("last-updated").textContent = "Last updated: Error fetching commit date";
        }
    }


    fetchLastCommitDate();
});
