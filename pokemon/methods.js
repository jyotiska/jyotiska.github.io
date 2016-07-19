$(document).ready(function() {
    var score = 0;
    var pokemon_name = "";
    var difficulty = "easy";

    $('#light').click(function() {
        var css_value = $('#pokemon_image').css("-webkit-filter");
        if (css_value === "brightness(0)") {
            $('#pokemon_image').css("-webkit-filter", "none");
        } else {
            $('#pokemon_image').css("-webkit-filter", "brightness(0)");
        }
    });

    $('.diff').first().addClass('active');

    pokemon_name = generate_random_image(difficulty);

    $('.diff').click(function() {
        var selected_difficulty = $(this).attr('value');
        if (selected_difficulty === difficulty) {
            return;
        }

        score = 0;
        updateScore(score);
        difficulty = selected_difficulty;
        $('a').removeClass('active');
        $(this).addClass('active');
        pokemon_name = generate_random_image(selected_difficulty);
    });

    $('.bt').click(function() {
        var clicked_pokemon = this.value;
        if (clicked_pokemon === pokemon_name["correct"]) {
            score = score + 1;
            updateScore(score);
            pokemon_name = generate_random_image(difficulty);
        } else {
            $('#social_buttons').append('<a class="twitter-share-button" id="twitter_url" href="https://twitter.com/intent/tweet?hashtags=whichpokemonisit&text=I%20identified%20' + score + ' Pokémon on&tw_p=tweetbutton&url=http%3A%2F%2Fjyotiska.github.io%2Fpokemon%2F">Tweet</a>');
            window.twttr.widgets.load();
            $('#final_correct_name').html('Correct answer was: <b>' + pokemon_name["correct"] + '</b>');
            $('#final_score').html('Your Score: ' + score);
            $('#content').hide();
            $('#game_over').show();
        }
    });
});

var generate_random_image = function(difficulty) {
    var mapping = {"010": "Caterpie", "011": "Metapod", "012": "Butterfree", "013": "Weedle", "014": "Kakuna", "015": "Beedrill", "016": "Pidgey", "017": "Pidgeotto", "018": "Pidgeot", "019": "Rattata", "344": "Claydol", "345": "Lileep", "346": "Cradily", "347": "Anorith", "340": "Whiscash", "341": "Corphish", "342": "Crawdaunt", "343": "Baltoy", "348": "Armaldo", "349": "Feebas", "595": "Joltik", "719": "Diancie", "718": "Zygarde", "717": "Yveltal", "716": "Xerneas", "715": "Noivern", "714": "Noibat", "713": "Avalugg", "712": "Bergmite", "711": "Gourgeist", "710": "Pumpkaboo", "606": "Beheeyem", "594": "Alomomola", "619": "Mienfoo", "298": "Azurill", "299": "Nosepass", "296": "Makuhita", "297": "Hariyama", "294": "Loudred", "295": "Exploud", "292": "Shedinja", "293": "Whismur", "290": "Nincada", "291": "Ninjask", "591": "Amoonguss", "590": "Foongus", "593": "Jellicent", "592": "Frillish", "199": "Slowking", "198": "Murkrow", "597": "Ferroseed", "596": "Galvantula", "195": "Quagsire", "194": "Wooper", "197": "Umbreon", "196": "Espeon", "191": "Sunkern", "190": "Aipom", "193": "Yanma", "192": "Sunflora", "270": "Lotad", "271": "Lombre", "272": "Ludicolo", "273": "Seedot", "274": "Nuzleaf", "275": "Shiftry", "276": "Taillow", "277": "Swellow", "278": "Wingull", "279": "Pelipper", "524": "Roggenrola", "525": "Boldore", "526": "Gigalith", "527": "Woobat", "520": "Tranquill", "521": "Unfezant", "522": "Blitzle", "523": "Zebstrika", "599": "Klink", "528": "Swoobat", "529": "Drilbur", "449": "Hippopotas", "448": "Lucario", "443": "Gible", "442": "Spiritomb", "441": "Chatot", "440": "Happiny", "447": "Riolu", "446": "Munchlax", "445": "Garchomp", "444": "Gabite", "108": "Lickitung", "109": "Koffing", "102": "Exeggcute", "103": "Exeggutor", "100": "Voltorb", "101": "Electrode", "106": "Hitmonlee", "107": "Hitmonchan", "104": "Cubone", "105": "Marowak", "601": "Klinklang", "641": "Tornadus", "640": "Virizion", "643": "Reshiram", "642": "Thundurus", "645": "Landorus", "644": "Zekrom", "438": "Bonsly", "439": "Mime Jr.", "436": "Bronzor", "437": "Bronzong", "434": "Stunky", "435": "Skuntank", "432": "Purugly", "433": "Chingling", "430": "Honchkrow", "431": "Glameow", "339": "Barboach", "338": "Solrock", "335": "Zangoose", "334": "Altaria", "337": "Lunatone", "336": "Seviper", "331": "Cacnea", "330": "Flygon", "333": "Swablu", "332": "Cacturne", "058": "Growlithe", "059": "Arcanine", "054": "Psyduck", "055": "Golduck", "056": "Mankey", "057": "Primeape", "050": "Diglett", "051": "Dugtrio", "052": "Meowth", "053": "Persian", "650": "Chespin", "559": "Scraggy", "558": "Crustle", "555": "Darmanitan", "554": "Darumaka", "557": "Dwebble", "556": "Maractus", "551": "Sandile", "550": "Basculin", "553": "Krookodile", "552": "Krokorok", "238": "Smoochum", "239": "Elekid", "234": "Stantler", "235": "Smeargle", "236": "Tyrogue", "237": "Hitmontop", "230": "Kingdra", "231": "Phanpy", "232": "Donphan", "233": "Porygon2", "614": "Beartic", "146": "Moltres", "147": "Dratini", "144": "Articuno", "145": "Zapdos", "142": "Aerodactyl", "143": "Snorlax", "140": "Kabuto", "141": "Kabutops", "612": "Haxorus", "613": "Cubchoo", "610": "Axew", "611": "Fraxure", "616": "Shelmet", "617": "Accelgor", "148": "Dragonair", "149": "Dragonite", "689": "Barbaracle", "688": "Binacle", "685": "Slurpuff", "684": "Swirlix", "687": "Malamar", "686": "Inkay", "681": "Aegislash", "680": "Doublade", "683": "Aromatisse", "682": "Spritzee", "098": "Krabby", "099": "Kingler", "622": "Golett", "090": "Shellder", "091": "Cloyster", "092": "Gastly", "093": "Haunter", "094": "Gengar", "095": "Onix", "096": "Drowzee", "097": "Hypno", "133": "Eevee", "132": "Ditto", "131": "Lapras", "130": "Gyarados", "137": "Porygon", "136": "Flareon", "135": "Jolteon", "134": "Vaporeon", "494": "Victini", "495": "Snivy", "139": "Omastar", "138": "Omanyte", "490": "Manaphy", "491": "Darkrai", "492": "Shaymin", "493": "Arceus", "407": "Roserade", "406": "Budew", "405": "Luxray", "404": "Luxio", "403": "Shinx", "402": "Kricketune", "401": "Kricketot", "400": "Bibarel", "629": "Vullaby", "409": "Rampardos", "408": "Cranidos", "628": "Braviary", "025": "Pikachu", "024": "Arbok", "027": "Sandshrew", "026": "Raichu", "021": "Spearow", "020": "Raticate", "023": "Ekans", "022": "Fearow", "029": "Nidoran", "028": "Sandslash", "379": "Registeel", "378": "Regice", "371": "Bagon", "370": "Luvdisc", "373": "Salamence", "372": "Shelgon", "375": "Metang", "374": "Beldum", "377": "Regirock", "376": "Metagross", "708": "Phantump", "709": "Trevenant", "704": "Goomy", "705": "Sliggoo", "706": "Goodra", "707": "Klefki", "700": "Sylveon", "618": "Stunfisk", "702": "Dedenne", "703": "Carbink", "393": "Piplup", "392": "Infernape", "391": "Monferno", "390": "Chimchar", "397": "Staravia", "396": "Starly", "395": "Empoleon", "394": "Prinplup", "399": "Bidoof", "398": "Staraptor", "607": "Litwick", "586": "Sawsbuck", "587": "Emolga", "584": "Vanilluxe", "585": "Deerling", "582": "Vanillite", "583": "Vanillish", "580": "Ducklett", "581": "Swanna", "588": "Karrablast", "589": "Escavalier", "245": "Suicune", "244": "Entei", "247": "Pupitar", "246": "Larvitar", "241": "Miltank", "240": "Magby", "243": "Raikou", "242": "Blissey", "615": "Cryogonal", "249": "Lugia", "248": "Tyranitar", "519": "Pidove", "518": "Musharna", "511": "Pansage", "510": "Liepard", "513": "Pansear", "512": "Simisage", "515": "Panpour", "514": "Simisear", "517": "Munna", "516": "Simipour", "458": "Mantyke", "459": "Snover", "621": "Druddigon", "620": "Mienshao", "627": "Rufflet", "626": "Bouffalant", "625": "Bisharp", "624": "Pawniard", "450": "Hippowdon", "451": "Skorupi", "452": "Drapion", "453": "Croagunk", "454": "Toxicroak", "455": "Carnivine", "456": "Finneon", "457": "Lumineon", "179": "Mareep", "178": "Xatu", "177": "Natu", "176": "Togetic", "175": "Togepi", "174": "Igglybuff", "173": "Cleffa", "172": "Pichu", "171": "Lanturn", "170": "Chinchou", "656": "Froakie", "657": "Frogadier", "654": "Braixen", "182": "Bellossom", "183": "Marill", "180": "Flaaffy", "181": "Ampharos", "186": "Politoed", "187": "Hoppip", "184": "Azumarill", "185": "Sudowoodo", "652": "Chesnaught", "188": "Skiploom", "189": "Jumpluff", "658": "Greninja", "653": "Fennekin", "061": "Poliwhirl", "060": "Poliwag", "063": "Abra", "062": "Poliwrath", "065": "Alakazam", "064": "Kadabra", "067": "Machoke", "066": "Machop", "069": "Bellsprout", "068": "Machamp", "651": "Quilladin", "659": "Bunnelby", "649": "Genesect", "496": "Servine", "322": "Numel", "323": "Camerupt", "320": "Wailmer", "321": "Wailord", "326": "Grumpig", "327": "Spinda", "324": "Torkoal", "325": "Spoink", "328": "Trapinch", "329": "Vibrava", "201": "Unown", "200": "Misdreavus", "203": "Girafarig", "202": "Wobbuffet", "205": "Forretress", "204": "Pineco", "207": "Gligar", "206": "Dunsparce", "209": "Snubbull", "208": "Steelix", "655": "Delphox", "669": "Flabb", "668": "Pyroar", "667": "Litleo", "666": "Vivillon", "665": "Spewpa", "664": "Scatterbug", "663": "Talonflame", "662": "Fletchinder", "661": "Fletchling", "660": "Diggersby", "692": "Clauncher", "693": "Clawitzer", "690": "Skrelp", "691": "Dragalge", "696": "Tyrunt", "697": "Tyrantrum", "694": "Helioptile", "695": "Heliolisk", "698": "Amaura", "699": "Aurorus", "623": "Golurk", "542": "Leavanny", "543": "Venipede", "540": "Sewaddle", "541": "Swadloon", "546": "Cottonee", "547": "Whimsicott", "544": "Whirlipede", "545": "Scolipede", "548": "Petilil", "549": "Lilligant", "598": "Ferrothorn", "120": "Staryu", "121": "Starmie", "122": "Mr. Mime", "123": "Scyther", "124": "Jynx", "125": "Electabuzz", "126": "Magmar", "127": "Pinsir", "128": "Tauros", "129": "Magikarp", "414": "Mothim", "415": "Combee", "416": "Vespiquen", "417": "Pachirisu", "410": "Shieldon", "411": "Bastiodon", "412": "Burmy", "413": "Wormadam", "498": "Tepig", "418": "Buizel", "419": "Floatzel", "499": "Pignite", "319": "Sharpedo", "318": "Carvanha", "313": "Volbeat", "312": "Minun", "311": "Plusle", "310": "Manectric", "317": "Swalot", "316": "Gulpin", "315": "Roselia", "314": "Illumise", "038": "Ninetales", "039": "Jigglypuff", "032": "Nidoran", "033": "Nidorino", "030": "Nidorina", "031": "Nidoqueen", "036": "Clefable", "037": "Vulpix", "034": "Nidoking", "035": "Clefairy", "497": "Serperior", "368": "Gorebyss", "369": "Relicanth", "366": "Clamperl", "367": "Huntail", "364": "Sealeo", "365": "Walrein", "362": "Glalie", "363": "Spheal", "360": "Wynaut", "361": "Snorunt", "380": "Latias", "381": "Latios", "382": "Kyogre", "383": "Groudon", "384": "Rayquaza", "385": "Jirachi", "386": "Deoxys", "387": "Turtwig", "388": "Grotle", "389": "Torterra", "605": "Elgyem", "579": "Reuniclus", "578": "Duosion", "604": "Eelektross", "573": "Cinccino", "572": "Minccino", "571": "Zoroark", "570": "Zorua", "577": "Solosis ", "576": "Gothitelle", "575": "Gothorita", "574": "Gothita", "258": "Mudkip", "259": "Marshtomp", "252": "Treecko", "253": "Grovyle", "250": "Ho-Oh", "251": "Celebi", "256": "Combusken", "257": "Blaziken", "254": "Sceptile", "255": "Torchic", "603": "Eelektrik", "602": "Tynamo", "508": "Stoutland", "509": "Purrloin", "506": "Lillipup", "507": "Herdier", "504": "Patrat", "505": "Watchog", "502": "Dewott", "503": "Samurott", "500": "Emboar", "501": "Oshawott", "630": "Mandibuzz", "631": "Heatmor", "632": "Durant", "633": "Deino", "469": "Yanmega", "468": "Togekiss", "636": "Larvesta", "637": "Volcarona", "465": "Tangrowth", "464": "Rhyperior", "467": "Magmortar", "466": "Electivire", "461": "Weavile", "460": "Abomasnow", "463": "Lickilicky", "462": "Magnezone", "168": "Ariados", "169": "Crobat", "164": "Noctowl", "165": "Ledyba", "166": "Ledian", "167": "Spinarak", "160": "Feraligatr", "161": "Sentret", "162": "Furret", "163": "Hoothoot", "076": "Golem", "077": "Ponyta", "074": "Geodude", "075": "Graveler", "072": "Tentacool", "073": "Tentacruel", "070": "Weepinbell", "071": "Victreebel", "078": "Rapidash", "079": "Slowpoke", "600": "Klang", "647": "Keldeo", "646": "Kyurem", "003": "Venusaur", "002": "Ivysaur", "001": "Bulbasaur", "007": "Squirtle", "006": "Charizard", "005": "Charmeleon", "004": "Charmander", "009": "Blastoise", "008": "Wartortle", "357": "Tropius", "356": "Dusclops", "355": "Duskull", "354": "Banette", "353": "Shuppet", "352": "Kecleon", "351": "Castform", "350": "Milotic", "359": "Absol", "358": "Chimecho", "216": "Teddiursa", "217": "Ursaring", "214": "Heracross", "215": "Sneasel", "212": "Scizor", "213": "Shuckle", "210": "Granbull", "211": "Qwilfish", "218": "Slugma", "219": "Magcargo", "289": "Slaking", "288": "Vigoroth", "281": "Kirlia", "280": "Ralts", "283": "Surskit", "282": "Gardevoir", "285": "Shroomish", "284": "Masquerain", "287": "Slakoth", "286": "Breloom", "678": "Meowstic", "679": "Honedge", "674": "Pancham", "675": "Pangoro", "676": "Furfrou", "677": "Espurr", "670": "Floette", "671": "Florges", "672": "Skiddo", "673": "Gogoat", "263": "Zigzagoon", "262": "Mightyena", "261": "Poochyena", "260": "Swampert", "267": "Beautifly", "266": "Silcoon", "265": "Wurmple", "264": "Linoone", "269": "Dustox", "268": "Cascoon", "701": "Hawlucha", "537": "Seismitoad", "536": "Palpitoad", "535": "Tympole", "534": "Conkeldurr", "533": "Gurdurr", "532": "Timburr", "531": "Audino", "530": "Excadrill", "539": "Sawk", "538": "Throh", "115": "Kangaskhan", "114": "Tangela", "117": "Seadra", "116": "Horsea", "111": "Rhyhorn", "110": "Weezing", "113": "Chansey", "112": "Rhydon", "119": "Seaking", "118": "Goldeen", "429": "Mismagius", "428": "Lopunny", "421": "Cherrim", "420": "Cherubi", "423": "Gastrodon", "422": "Shellos", "425": "Drifloon", "424": "Ambipom", "427": "Buneary", "426": "Drifblim", "308": "Medicham", "309": "Electrike", "300": "Skitty", "301": "Delcatty", "302": "Sableye", "303": "Mawile", "304": "Aron", "305": "Lairon", "306": "Aggron", "307": "Meditite", "049": "Venomoth", "048": "Venonat", "047": "Parasect", "046": "Paras", "045": "Vileplume", "044": "Gloom", "043": "Oddish", "042": "Golbat", "041": "Zubat", "040": "Wigglytuff", "648": "Meloetta", "568": "Trubbish", "569": "Garbodor", "560": "Scrafty", "561": "Sigilyph", "562": "Yamask", "563": "Cofagrigus", "564": "Tirtouga", "565": "Carracosta", "566": "Archen", "567": "Archeops", "229": "Houndoom", "228": "Houndour", "227": "Skarmory", "226": "Mantine", "225": "Delibird", "224": "Octillery", "223": "Remoraid", "222": "Corsola", "221": "Piloswine", "220": "Swinub", "720": "Hoopa", "151": "Mew", "150": "Mewtwo", "153": "Bayleef", "152": "Chikorita", "155": "Cyndaquil", "154": "Meganium", "157": "Typhlosion", "156": "Quilava", "159": "Croconaw", "158": "Totodile", "609": "Chandelure", "608": "Lampent", "634": "Zweilous", "635": "Hydreigon", "638": "Cobalion", "639": "Terrakion", "089": "Muk", "088": "Grimer", "083": "Farfetch'd", "082": "Magneton", "081": "Magnemite", "080": "Slowbro", "087": "Dewgong", "086": "Seel", "085": "Dodrio", "084": "Doduo", "489": "Phione", "488": "Cresselia", "487": "Giratina", "486": "Regigigas", "485": "Heatran", "484": "Palkia", "483": "Dialga", "482": "Azelf", "481": "Mesprit", "480": "Uxie", "472": "Gliscor", "473": "Mamoswine", "470": "Leafeon", "471": "Glaceon", "476": "Probopass", "477": "Dusknoir", "474": "Porygon-Z", "475": "Gallade", "478": "Froslass", "479": "Rotom"};
    var random_number_string = '';
    var difficulty_value = 250;

    if (difficulty === "easy") {
        difficulty_value = 250;
    } else if (difficulty === "medium") {
        difficulty_value = 350;
    } else if (difficulty === "hard") {
        difficulty_value = 500;
    } else if (difficulty === "ultimate") {
        difficulty_value = 700;
    }

    var random_number = Math.floor((Math.random() * difficulty_value) + 1);
    if (random_number < 10) {
        random_number_string = '00' + String(random_number);
    } else if (random_number < 100) {
        random_number_string = '0' + String(random_number);
    } else {
        random_number_string = String(random_number);
    }
    var imgurl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + random_number_string + '.png';
    $('#pokemon_image').attr('src', imgurl);

    var return_value = {"correct": "", "incorrect": ["", ""]};

    return_value["correct"] = mapping[random_number_string];
    delete mapping[random_number_string];

    var all_keys = Object.keys(mapping);
    var incorrect_choice_1 = all_keys[Math.floor(Math.random() * all_keys.length)];
    return_value["incorrect"][0] = mapping[incorrect_choice_1];
    delete mapping[incorrect_choice_1];

    var all_keys = Object.keys(mapping);
    var incorrect_choice_2 = all_keys[Math.floor(Math.random() * all_keys.length)];
    return_value["incorrect"][1] = mapping[incorrect_choice_2];
    delete mapping[incorrect_choice_1];

    var positions = [1, 2, 3];
    var random_position = positions[Math.floor(Math.random() * positions.length)];
    positions.splice(random_position - 1, 1);

    $('#input' + String(random_position)).val(return_value["correct"]);

    for (var i=0; i < positions.length; i++) {
        $('#input' + String(positions[i])).val(return_value["incorrect"][i]);
    }

    return return_value;
};

var updateScore = function(newScore) {
    $('#score').text(String(newScore));
    $('#score2').text(String(newScore));
};
