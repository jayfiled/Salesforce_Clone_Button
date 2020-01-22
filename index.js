const createAndAddButton = () => {
    // Get the container housing the user Icon
        const userIcon = document.querySelector("#setupComponent > div.slds-page-header.branding-setup.onesetupSetupHeader > div > div.bLeft");
        console.log(userIcon);

        let url = document.location.href;
        const button = document.createElement("button");
        button.innerHTML = "Clone";
        userIcon.appendChild(button);

        button.addEventListener ('click', () => {
            navigateToCloneUrl(url);
        });
    }

    const navigateToCloneUrl = url => {
        const setCloneUrl = url.replace(/%3F.+/, '/e?clone=1');
        document.location.href = setCloneUrl;
    }

        setTimeout(createAndAddButton, 5000);