const Hashless = (evt: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    evt.preventDefault();

    // musíme odstranit hash pomocí substring na elementu
    const currentTarget = evt.currentTarget;
    const targetId = currentTarget.getAttribute("href")?.substring(1);
    const targetLink = document.getElementById(targetId || "");

    if (targetLink) {
        targetLink.scrollIntoView({
            behavior: "smooth"
        });
    };
};

export default Hashless;