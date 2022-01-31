const nameComponent = React.createElement(
    "div",
    { id: "out" },
    React.createElement(
        "h2",
        { id: "name_comp" },
        "Melrick Mascarenhas"
    )
);

const pictureComponent = React.createElement(
    "div",
    { id: "picture_out" },
    React.createElement("img", { id: "picture_comp", src: "./profile-pic.jpg" })
);

const introComponent = React.createElement(
    "div",
    { id: "intro_out" },
    React.createElement(
        "p",
        { id: "intro_comp" },
        "Melrick"
    )
);

const buttonComponent = React.createElement(
    "div",
    { id: "button_out" },
    React.createElement(
        "a",
        { href: "https://github.com/melrick8196" },
        React.createElement(
            "button",
            { id: "button_comp" },
            "GITHUB REPO"
        )
    )
);

ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));