import fs from "fs";

import {
    makeWASocketAuto,
    autoReconnect,
    useMultiFileAuthState,
    Button,
    Carousel
} from "@japofc/baileys";

const OWNER_NUMBER = "085724744152";

const PAYMENT = {
    dana: "081225386003",
    ovo: "085724744152",
    gopay: "085724744152",
    qris: "https://contoh.com/qris"
};

async function sendPayment(sock, jid) {
    const logo = fs.readFileSync("./media/logo.jpg");
    const bugwa = fs.readFileSync("./media/bugwa.jpg");

    const dana = await new Button(sock)
        .setImage(fs.readFileSync("./media/dana.jpg"))
        .setTitle("DANA")
        .addCopy("Dana Payment", PAYMENT.dana)
        .toCard();

    const ovo = await new Button(sock)
        .setImage(fs.readFileSync("./media/ovo.jpg"))
        .setTitle("OVO")
        .addCopy("OVO Payment", PAYMENT.ovo)
        .toCard();

    const gopay = await new Button(sock)
        .setImage(fs.readFileSync("./media/gopay.jpg"))
        .setTitle("GoPay")
        .addCopy("Gopay Payment", PAYMENT.gopay)
        .toCard();

    const qris = await new Button(sock)
        .setImage(fs.readFileSync("./media/qris.jpg"))
        .setTitle("QRIS")
        .addUrl("QRIS Payment", PAYMENT.qris)
        .toCard();

    
    const bri = await new Button(sock)
        .setImage(logo)
        .setTitle("Bank BRI")
        .addCopy("Salin No. Rekening", "136301008318501")
        .toCard();

await new Carousel(sock)
        .setBody("ᴘɪʟɪʜ sᴀʟᴀʜ sᴀᴛᴜ ᴘᴀʏᴍᴇɴᴛ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ʏᴀɴɢ ᴛᴇʀsᴇᴅɪᴀ")
        .addCard([
            qris,
            bri,
            dana,
            ovo,
            gopay
        ])
        .send(jid);
}

async function sendProduct(sock, jid) {
    const logo = fs.readFileSync("./media/logo.jpg");


    const panel = await new Button(sock)
        .setImage(logo)
        .setTitle("Panel Pterodactyl")
        .setBody(
            "1 hari  : Rp  500\n" +
            "2 hari  : Rp1.500\n" +
            "3 hari  : Rp2.000\n" +
            "4 hari  : Rp2.500\n" +
            "5 hari  : Rp3.000\n" +
            "Garansi full sesuai lama order"
        )
        .addUrl("Pesan Sekarang", "https://wa.me/6285724744152")
        .toCard();

    const bot = await new Button(sock)
        .setImage(logo)
        .setTitle("Script Bot WhatsApp")
        .setBody(
            "Script bot WhatsApp siap pakai.\n\n" +
            "• Base bot\n" +
            "• json\n" +
            "• tidak di encryption\n" +
            "• tinggal rename rename\n\n" +
            "10k dapat sc seperti yang sedang aktif ini"
        )
        .addUrl("Pesan Sekarang", "https://wa.me/6285724744152")
        .toCard();


    const nokos = await new Button(sock)
        .setImage(logo)
        .setTitle("Nokos WhatsApp/tele")
        .setBody(
            "Nomor WhatsApp/tele berbagai region.\n\n" +
            "• Indonesia\n" +
            "• USA\n" +
            "• UK\n" +
            "• Region lainnya\n\n" +
            "5k"
        )
        .addUrl("Cek Stok", "https://wa.me/6285724744152")
        .toCard();

   const bug = await new Button(sock)
        .setImage(logo)
        .setTitle("List Bug Wa")
        .setBody(
            "List Bug Wa\n" +
            "• Spam OTP\n" +
            "• Ban/Blank Group wa\n" +
            "• bug ios/android\n" +
            "Tanyain aja sisa nya\n\n" +
            "start 2k-10k"
        )
        .addUrl("Cek Stok", "https://wa.me/6285724744152")
        .toCard();
    
    const bug2 = await new Button(sock)
        .setImage(logo)
        .setTitle("APK Bug Wa")
        .setBody(
            "List Fitur\n" +
            "• Seperti bug WA\n" +
            "• RAT\n" + 
            "• spam NGL\n" +
            "• Wifi KILL\n" +
            "• dll\n\n" +
            "fitur lain pm aja\n" +
            "start 15k-25k"
        )
        .addUrl("Cek Stok", "https://wa.me/6285724744152")
        .toCard(); 

   const doxxing = await new Button(sock)
        .setImage(logo)
        .setTitle("Doxxing")
        .setBody(
            "List Data yang di dapat\n" +
            "• NIK/No KTP\n" +
            "• NO.KK\n" +
            "• bug ios/android\n" +
            "Tanyain aja sisa nya\n\n" +
            "start 2k-10k"
        )
        .addUrl("Cek Stok", "https://wa.me/6285724744152")
        .toCard();


    await new Carousel(sock)
        .setBody(
            "Produk Dan Jasa\n\n" +
            "Pilih produk atau layanan yang kamu butuhkan.\n" +
            "Swipe untuk melihat katalog."
        )
        .addCard([panel, bot, nokos, bug, bug2, doxxing])
        .send(jid);
}

async function startBot() {
    const { state, saveCreds } =
        await useMultiFileAuthState("./session");

    const manager = autoReconnect(
        () =>
            makeWASocketAuto({
                auth: state,
                printQRInTerminal: true
            }),
        {
            onSocket: (sock) => {
                sock.ev.on("creds.update", saveCreds);

                sock.ev.on("connection.update", ({ connection }) => {
                    if (connection === "open") {
                        console.log("✅ WhatsApp connected.");
                        console.log("Bot is running...");
                        console.log("⠀⠀⠀⢸⣦⡀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀");
                        console.log("⠀⠀⠀⢸⣏⠻⣶⣤⡶⢾⡿⠁⠀⢠⣄⡀⢀⣴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
                        console.log("⠀⠀⣀⣼⠷⠀⠀⠁⢀⣿⠃⠀⠀⢀⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
                        console.log("⠴⣾⣯⣅⣀⠀⠀⠀⠈⢻⣦⡀⠒⠻⠿⣿⡿⠿⠓⠂⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀");
                        console.log("⠀⠀⠀⠉⢻⡇⣤⣾⣿⣷⣿⣿⣤⠀⠀⣿⠁⠀⠀⠀⢀⣴⣿⣿⠀⠀⠀⠀⠀⠀⠀");
                        console.log("⠀⠀⠀⠀⠸⣿⡿⠏⠀⢀⠀⠀⠿⣶⣤⣤⣤⣄⣀⣴⣿⡿⢻⣿⡆⠀⠀⠀⠀⠀⠀");
                        console.log("⠀⠀⠀⠀⠀⠟⠁⠀⢀⣼⠀⠀⠀⠹⣿⣟⠿⠿⠿⡿⠋⠀⠘⣿⣇⠀⠀⠀⠀⠀⠀");
                        console.log("⠀⠀⠀⠀⠀⢳⣶⣶⣿⣿⣇⣀⠀⠀⠙⣿⣆⠀⠀⠀⠀⠀⠀⠛⠿⣿⣦⣤⣀⠀⠀");
                        console.log("⠀⠀⠀⠀⠀⠀⣹⣿⣿⣿⣿⠿⠋⠁⠀⣹⣿⠳⠀⠀⠀⠀⠀⠀⢀⣠⣽⣿⡿⠟⠃   ");
                        console.log("⠀⠀⠀⠀⠀⢰⠿⠛⠻⢿⡇⠀⠀⠀⣰⣿⠏⠀⠀⢀⠀⠀⠀⣾⣿⠟⠋⠁⠀⠀⠀   ");
                        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠀⠀⣰⣿⣿⣾⣿⠿⢿⣷⣀⢀⣿⡇⠁⠀⠀⠀⠀⠀   ");
                        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠉⠁⠀⠀⠀⠀⠙⢿⣿⣿⠇⠀⠀⠀⠀     ⠀");
                        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⠀⠀⠀⠀⠀⠀     ⠀");
                        console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀     ⠀");
                        
                    }
                });

                sock.ev.on("messages.upsert", async ({ messages }) => {
                    const msg = messages[0];

                    if (!msg.message) return;

                    const text =
                        msg.message.conversation ||
                        msg.message.extendedTextMessage?.text ||
                        "";

                    const allowedCommands = [
                        ".ping",
                        ".payment",
                        ".pay",
                        ".produk",
                        ".product"
                    ];

                    if (msg.key.fromMe && !allowedCommands.includes(text.trim())) {
                        return;
                    }

                    const jid = msg.key.remoteJid;


                    console.log(`[${jid}] ${text}`);

                    if (text.trim() === ".ping") {
                        await sock.sendMessage(jid, {
                            text: "Pong! 🏓"
                        });
                    }
                    if (text.trim() === ".produk" || text.trim() === ".product") {
                        await sendProduct(sock, jid);
                    }
                    if (
                        text.trim() === ".payment" ||
                        text.trim() === ".pay"
                    ) {
                        await sendPayment(sock, jid);
                    }
                });
            },

            onLoggedOut: () => {
                console.log("❌ WhatsApp logout.");
            }
        }
    );

    await manager.start();
}

startBot().catch(console.error);
