// Create user card function
function createCard(user) {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-md p-4 flex items-center gap-4 mb-4";

    const avatar = document.createElement("img");
    avatar.src = user.picture.large;
    avatar.className = "w-12 h-12 rounded-full object-cover";

    const info = document.createElement("div");

    const name = document.createElement("h2");
    name.className = "text-lg font-semibold text-gray-800";
    name.textContent = `${user.name.first} ${user.name.last}`;

    const email = document.createElement("p");
    email.className = "text-sm text-gray-500";
    email.textContent = user.email;

    info.appendChild(name);
    info.appendChild(email);

    card.appendChild(avatar);
    card.appendChild(info);

    return card;
}

// Fetch Random Users
fetch("https://randomuser.me/api/?results=3")
    .then(res => res.json())
    .then(data => {
        const container = document.querySelector(".users");

        data.results.forEach(user => {
            container.appendChild(createCard(user));
        });
    });
