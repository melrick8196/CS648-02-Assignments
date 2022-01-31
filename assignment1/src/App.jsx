const nameComponent = (
    <div id ="out">
            <h2 id = "name_comp">Melrick Mascarenhas</h2>
    </div>
    );
    
    const pictureComponent = (
        <div id = "picture_out">
            <img id = "picture_comp" src = "./profile-pic.jpg"/>
        </div>
    );
    
    const introComponent = (
        <div id= "intro_out">
            <p id = "intro_comp">
            Hello, my name is Melrick, I am a grad student at SDSU. I like web development, cloud computing and software development.
            </p>
        </div>
                
    );
    
    const buttonComponent = (
        <div id= "button_out">
            <a href="https://github.com/melrick8196"><button id= "button_comp">GITHUB REPO</button></a>
        </div>
    
    );
    
    ReactDOM.render(nameComponent, document.getElementById('name'));
    ReactDOM.render(pictureComponent, document.getElementById('picture'));
    ReactDOM.render(introComponent, document.getElementById('introduction'));
    ReactDOM.render(buttonComponent, document.getElementById('button'));