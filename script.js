`use strict`;

// For older browsers:
typeof window.addEventListener === `undefined` && (window.addEventListener = (e, cb) => window.attachEvent(`on${e}`, cb));

window.addEventListener(`load`, () => {

    const $ = (id) => document.getElementById(id);

    $(`connect`).addEventListener(`click`, async () => {
        if (typeof window.ethereum !== `undefined`) {
            try {
                const currentAccounts = await window.ethereum.request({ method: `eth_requestAccounts`, });
                $(`status`).innerText = currentAccounts[0];
            } catch (e) {
                alert(`Something went wrong with eth_requestAccounts.`);
                $(`status`).innerText = `Not Connected.`;
            }
        } else {
            alert(`window.ethereum is undefined.`);
            $(`status`).innerText = `Not Connected.`;
        }
    });

    $(`sign`).addEventListener(`click`, () => {
        alert(`Message signing is yet to be implemented.`);
    });

});