var status = -1;

function action(mode, type, selection) {
    //if (mode != 1) {
    //    cm.dispose();
    //    return;
    //}
    status++;
    if (status == 0)
        cm.sendNextS("Kidan! Old pa! You really don't remember me? We say hello all the time!", 2);
    else if (status == 1)
        cm.sendNextPrev("Oh, um, sorry about that...");
    else if (status == 2)
        cm.sendNextPrevS("It's okay old chum, I know you're seeing countless people coming through. It can't be easy to remember all of them, but I was hoping you'd ad least remember ME.", 2);
    else if (status == 3)
        cm.sendNextPrev("H-hey! I said I was sorry! This place is like a madhouse right now.\r\nYou can't blame a guy for missing a few faces.");
    else if (status == 4)
        cm.sendNextPrevS("It's really that bad?", 2);
    else if (status == 5)
        cm.sendNextPrev("Of course! We've got some new royal lady claiming that Empress Cygnus may be a fake! How could anyone feel at ease?!");
    else if (status == 6)
        cm.sendNextPrevS("That's a good point. That's why I'm here!", 2);
    else if (status == 7)
        cm.sendNextPrev("It's got me pretty worried too. Even the Empress looked worried.\r\nShe was white as a ghost when I saw her...");
    else if (status == 8)
        cm.sendNextPrevS("Not looking forward to having a new empress, Kidan?", 2);
    else if (status == 9)
        cm.sendNextPrev("I would never wish ill of Empress Cygnus! We could not be where we are today without her leadership. But if this new woman's claims are true...");
    else if (status == 10)
        cm.sendNextPrevS("Do you really think there is another member of the Empress's bloodline?", 2);
    else if (status == 11)
        cm.sendNextPrev("This Hilla woman insisted that she was a descendant to the last Empress.");
    else if (status == 12)
        cm.sendNextPrevS("That would explain the foul mood.", 2);
    else if (status == 13)
        cm.sendNextPrev("Indeed. If Shinsoo were here, she could clear this up.\r\nUnfortunately she is not.");
    else if (status == 14)
        cm.sendNextPrev("Why did that woman insist on holding the conference today of all days?!");
    else if (status == 15)
        cm.sendNextPrevS("It seems awfully convenient, doesn't it?", 2);
    else if (status == 16)
        cm.sendNextPrev("I hope this works out. What are we going to do if Cygnus isn't the real empress? I have devoted myself to her.");
    else if (status == 17)
        cm.sendNextPrev("Ereve can't split into two. It would be chaos.");
    else if (status == 18)
        cm.sendNextPrevS("Don't worry too much, Kidan. I have a feeling these things will all work out.", 2);
    else if (status == 19)
        cm.sendNextPrev("I wish I had your optimism. At any rate, this Hilla character must be quite confident to call all these people here.");
    else if (status == 20)
        cm.sendNextPrevS("Confidence is required of both truthsayers and liars. You never know. Maybe someone INCREDIBLE will come swooping in to clear this up.", 2);
    else if (status == 21)
        cm.sendNextPrev("What does that mean? Why are you talking like that?");
    else if (status == 22)
        cm.sendNextPrevS("Don't worry yourself! I'm sure I'll see you after everything is said and done.", 2);
    else if (status == 23)
        cm.sendPrev("Uh...okay, see you.");
    else
        cm.dispose();
}