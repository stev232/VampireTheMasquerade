const disciplineList = {
    "disciplines": [
        {
            "discipline": "Animalism", "abilities": [
                { "name": "Bond Famulus", "level": 1, "ruleSet": "Core" },
                { "name": "Sense The Beast", "leve": 1, "ruleSet": "Core" },
                { "name": "Animal Messenger", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Feral Whispers", "level": 2, "ruleSet": "Core" },
                { "name": "Animal Succulence", "level": 3, "ruleSet": "Core" },
                { "name": "Messenger's Command", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Plague Of Beasts", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Quell The Beast", "level": 3, "ruleSet": "Core" },
                { "name": "Unliving Hive", "level": 3, "ruleSet": "Core" },
                { "name": "Subsume The Spirit", "level": 4, "ruleSet": "Core" },
                { "name": "Sway The Flock", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Animal Dominion", "level": 5, "ruleSet": "Core" },
                { "name": "Coax The Bestial Temper", "level": 5, "ruleSet": "PlayersGuide" },
                { "name": "Drawing Out The Beast", "level": 5, "ruleSet": "Core" }
            ]
        },
        {
            "discipline": "Auspex", "abilities": [
                { "name": "Heightened Senses", "level": 1, "ruleSet": "Core" },
                { "name": "Sense The Unseen", "level": 1, "ruleSet": "Core" },
                { "name": "Panacea", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Premonition", "level": 2, "ruleSet": "Core" },
                { "name": "Reveal Temperament", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Fatal Flaw", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Scry The Soul", "level": 3, "ruleSet": "Core" },
                { "name": "Share The Senses", "level": 3, "ruleSet": "Core" },
                { "name": "Spirit's Touch", "level": 4, "ruleSet": "Core" },
                { "name": "Clairvoyance", "level": 5, "ruleSet": "Core" },
                { "name": "Possession", "level": 5, "ruleSet": "Core" },
                { "name": "Telepathy", "level": 5, "ruleSet": "Core" },
                { "name": "Unburdening The Bestial SOul", "level": 5, "ruleSet": "PlayersGuide" }
            ]
        },
        {
            "discipline": "Blood Sorcery", "abilities": [
                { "name": "Corrosive Vitae", "level": 1, "ruleSet": "Core" },
                { "name": "A Taste For Blood", "level": 1, "ruleSet": "Core" },
                { "name": "Extinguish Vitae", "level": 2, "ruleSet": "Core" },
                { "name": "Scour Secrets", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Blood Of Potency", "level": 3, "ruleSet": "Core" },
                { "name": "Scorpion's Touch", "level": 3, "ruleSet": "Core" },
                { "name": "Blood Aegis", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Theft Of Vitae", "level": 4, "ruleSet": "Core" },
                { "name": "Baal's Caress", "level": 5, "ruleSet": "Core" },
                { "name": "Cauldron Of Blood", "level": 5, "ruleSet": "Core" }
            ] 
        },
        { "discipline": "Blood Sorcery Rituals", "abilities": [
                { "name": "Blood Walk", "level": 1, "ruleSet": "Core" },
                { "name": "Clining Of The Insect", "level": 1, "ruleSet": "Core" },
                { "name": "Craft Bloodstone", "level": 1, "ruleSet": "Core" },
                { "name": "Wake With Evening's Freshness", "level": 1, "ruleSet": "Core" },
                { "name": "Ward Against Ghouls", "level": 1, "ruleSet": "Core" },
                { "name": "Communicate With Kindred Sire", "level": 2, "ruleSet": "Core" },
                { "name": "Eyes Of Babel", "level": 2, "ruleSet": "Core" },
                { "name": "Illuminate The Trail Of Prey", "level": 2, "ruleSet": "Core" },
                { "name": "Truth Of Blood", "level": 2, "ruleSet": "Core" }
            ]
        },
        {
            "discipline": "Celerity", "abilities": [
                { "name": "Cat's Grace", "level": 1, "ruleSet": "Core" },
                { "name": "Rapid Reflexes", "level": 1, "ruleSet": "Core" },
                { "name": "Fleetness", "level": 2, "ruleSet": "Core" },
                { "name": "Rush Job", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Blink", "level": 3, "ruleSet": "Core" },
                { "name": "Traversal", "level": 3, "ruleSet": "Core" },
                { "name": "Weaving", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Blurred Momentum", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Draught Of Elegance", "level": 4, "ruleSet": "Core" },
                { "name": "Unerring Aim", "level": 4, "ruleSet": "Core" },
                { "name": "Unseen Strike", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Lightning Strike", "level": 5, "ruleSet": "Core" },
                { "name": "Split Second", "level": 5, "ruleSet": "Core" }
            ]
        },
        {
            "discipline": "Dominate", "abilities": [
                { "name": "Cloud Memory", "level": 1, "ruleSet": "Core" },
                { "name": "Compel", "level": 1, "ruleSet": "Core" },
                { "name": "Slavish Devotion", "level": 1, "ruleSet": "PlayersGuide" },
                { "name": "Domitor's Favor", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Mesmerize", "level": 2, "ruleSet": "Core" },
                { "name": "Dementation", "level": 2, "ruleSet": "Core" },
                { "name": "The Forgetful Mind", "level": 3, "ruleSet": "Core" },
                { "name": "Submerged Directive", "level": 3, "ruleSet": "Core" },
                { "name": "Ancestral Dominion", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Implant Suggestion", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Rationalize", "level": 4, "ruleSet": "Core" },
                { "name": "Mass Manipulation", "level": 5, "ruleSet": "Core" },
                { "name": "Terminal Decree", "level": 5, "ruleSet": "Core" }

            ]
        },
        {
            "discipline": "Fortitude", "abilities": [
                { "name": "Resilience", "level": 1, "ruleSet": "Core" },
                { "name": "Earth's Preseverance", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Enduring Beast", "level": 2, "ruleSet": "Core" },
                { "name": "Invigorating Vitae", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Toughness", "level": 2, "ruleSet": "Core" },
                { "name": "Defy Bane", "level": 3, "ruleSet": "Core" },
                { "name": "Fortify The Inner Facade", "level": 3, "ruleSet": "Core" },
                { "name": "Valeren", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Draught Of Endurance", "level": 4, "ruleSet": "Core" },
                { "name": "Gorgon's Scales", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Flesh Of Marble", "level": 5, "ruleSet": "Core" },
                { "name": "Prowess From Pain", "level": 5, "ruleSet": "Core" }

            ]
        },
        {
            "discipline": "Obfuscate", "abilities": [
                { "name": "Cloak Of Shadows", "level": 1, "ruleSet": "Core" },
                { "name": "Silence Of Death", "level": 1, "ruleSet": "Core" },
                { "name": "Chimerstry", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Unseen Passage", "level": 2, "ruleSet": "Core" },
                { "name": "Fata Morgana", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Ghost In The Machine", "level": 3, "ruleSet": "Core" },
                { "name": "Mental Maze", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Mind Masque", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Conceal", "level": 4, "ruleSet": "Core" },
                { "name": "Vanish", "level": 4, "ruleSet": "Core" },
                { "name": "Cloak The Gathering", "level": 5, "ruleSet": "Core" },
                { "name": "Imposter's Guide", "level": 5, "ruleSet": "Core" }
            ]
        },
        {
            "discipline": "Oblivion", "abilities": [
                { "name": "Ashes To Ashes", "level": 1, "ruleSet": "PlayersGuide" },
                { "name": "The Binding Fetter", "level": 1, "ruleSet": "PlayersGuide" },
                { "name": "Oblivion's Sight", "level": 1, "ruleSet": "PlayersGuide" },
                { "name": "Shadow Cloak", "level": 1, "ruleSet": "PlayersGuide" },
                { "name": "Arm Of Ahriman", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Fatal Prediction", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Shadow Cast", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Where The Veil Thins", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Aura Of Decay", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Passion Feast", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Shadw Perspective", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Shadw Servant", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Touch Of Oblivion", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Necrotic Plague", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Stygian Shroud", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Shadow Step", "level": 5, "ruleSet": "PlayersGuide" },
                { "name": "Skuld Fulfilled", "level": 5, "ruleSet": "PlayersGuide" },
                { "name": "Tenebrous Avatar", "level": 5, "ruleSet": "PlayersGuide" }
            ] 
        },
            {
                "discipline": "Oblivion Ceremonies", "abilities": [
                { "name": "The Gift Of False Life", "level": 1, "ruleSet": "PlayersGuide" },
                { "name": "Summon Spirit", "level": 1, "ruleSet": "PlayersGuide" },
                { "name": "Awaken The Homuncular Servant", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Compel Spirit", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Host Spirit", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Shambling Hordes", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Bind The Spirit", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Split The Veil", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Lazarene Blessing", "level": 5, "ruleSet": "PlayersGuide" }
            ]
        },
        {
            "discipline": "Potence", "abilities": [
                { "name": "Lethal Body", "level": 1, "ruleSet": "Core" },
                { "name": "Soaring Leap", "level": 1, "ruleSet": "Core" },
                { "name": "Prowess", "level": 2, "ruleSet": "Core" },
                { "name": "Relentless Grasp", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Brutal Feed", "level": 3, "ruleSet": "Core" },
                { "name": "Spark Of Rage", "level": 3, "ruleSet": "Core" },
                { "name": "Wrecker", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Uncanny Grip", "level": 3, "ruleSet": "Core" },
                { "name": "Crash Down", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Draught Of Hight", "level": 4, "ruleSet": "Core" },
                { "name": "EarthShock", "level": 5, "ruleSet": "Core" },
                { "name": "Fist Of Caine", "level": 5, "ruleSet": "Core" },
                { "name": "Subtle Hammer", "level": 5, "ruleSet": "PlayersGuide" }
            ]
        },
        {
            "discipline": "Presence", "abilities": [
                { "name": "Awe", "level": 1, "ruleSet": "Core" },
                { "name": "Daunt", "level": 1, "ruleSet": "Core" },
                { "name": "Eyes Of The Serpent", "level": 1, "ruleSet": "PlayersGuide" },
                { "name": "Lingering Kiss", "level": 2, "ruleSet": "Core" },
                { "name": "Melpominee", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Dread Gaze", "level": 3, "ruleSet": "Core" },
                { "name": "Entrancement", "level": 3, "ruleSet": "Core" },
                { "name": "Thrown Voice", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "Irresistible Voice", "level": 4, "ruleSet": "Core" },
                { "name": "Suffuse The Edifice", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Summon", "level": 4, "ruleSet": "Core" },
                { "name": "Majesty", "level": 5, "ruleSet": "Core" },
                { "name": "Star Magnetism", "level": 5, "ruleSet": "Core" }
            ]
        },
        {
            "discipline": "Protean", "abilities": [
                { "name": "Eyes Of The Beast", "level": 1, "ruleSet": "Core" },
                { "name": "Weight Of The Feather", "level": 1, "ruleSet": "Core" },
                { "name": "Feral Weapons", "level": 2, "ruleSet": "Core" },
                { "name": "Vicissitude", "level": 2, "ruleSet": "PlayersGuide" },
                { "name": "Earth Meld", "level": 3, "ruleSet": "Core" },
                { "name": "Fleshcrafting", "level": 3, "ruleSet": "PlayersGuide" },
                { "name": "ShapeChange", "level": 3, "ruleSet": "Core" },
                { "name": "Horrid Form", "level": 4, "ruleSet": "PlayersGuide" },
                { "name": "Metamorphosis", "level": 4, "ruleSet": "Core" },
                { "name": "Mist Form", "level": 5, "ruleSet": "Core" },
                { "name": "One With The Land", "level": 5, "ruleSet": "PlayersGuide" },
                { "name": "The Unfettered Heart", "level": 5, "ruleSet": "Core" }
            ]
        },
        {
            "discipline": "Thin-Blood Alchemy", "abilities": [
                { "name": "Far Reach", "level": 1, "ruleSet": "Core" },
                { "name": "Haze", "level": 1, "ruleSet": "Core" },
                { "name": "Envelop", "level": 2, "ruleSet": "Core" },
                { "name": "Defactionate", "level": 3, "ruleSet": "Core" },
                { "name": "Profane Hieros Gamos", "level": 3, "ruleSet": "Core" },
                { "name": "Airborne Momentum", "level": 4, "ruleSet": "Core" },
                { "name": "Awaken The Sleeper", "level": 5, "ruleSet": "Core" },
            ]
        }
    ]
};