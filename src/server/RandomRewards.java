package server;

import constants.GameConstants;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class RandomRewards {

    private final static RandomRewards instance = new RandomRewards();
    private List<Integer> compiledGold = null;
    private List<Integer> compiledJxbox = null;
    private List<Integer> compiledSilver = null;
    private List<Integer> compiledFishing = null;
    private List<Integer> compiledEvent = null;
    private List<Integer> compiledEventC = null;
    private List<Integer> compiledEventB = null;
    private List<Integer> compiledEventA = null;

    public static RandomRewards getInstance() {
        return instance;
    }

    protected RandomRewards() {
        System.out.println("【读取中】 RandomRewards :::");
        // Gold Box
        List<Integer> returnArray = new ArrayList<>();

        processRewards(returnArray, GameConstants.goldrewards);

        compiledGold = returnArray;

        // 惊新年礼盒
        returnArray = new ArrayList<>();

        processRewards(returnArray, GameConstants.Jxboxrewards);

        compiledJxbox = returnArray;

        // Silver Box
        returnArray = new ArrayList<>();

        processRewards(returnArray, GameConstants.silverrewards);

        compiledSilver = returnArray;

        // Fishing Rewards
        returnArray = new ArrayList<>();

        processRewards(returnArray, GameConstants.fishingReward);

        compiledFishing = returnArray;

        // Event Rewards
        returnArray = new ArrayList<>();

        processRewards(returnArray, GameConstants.eventCommonReward);

        compiledEventC = returnArray;

        returnArray = new ArrayList<>();

        processRewards(returnArray, GameConstants.eventUncommonReward);

        compiledEventB = returnArray;

        returnArray = new ArrayList<>();

        processRewards(returnArray, GameConstants.eventRareReward);

        compiledEventA = returnArray;

        returnArray = new ArrayList<>();

        processRewards(returnArray, GameConstants.eventSuperReward);

        compiledEvent = returnArray;
    }

    private void processRewards(final List<Integer> returnArray, final int[] list) {
        int lastitem = 0;
        for (int i = 0; i < list.length; i++) {
            if (i % 2 == 0) { // Even
                lastitem = list[i];
            } else { // Odd
                for (int j = 0; j < list[i]; j++) {
                    returnArray.add(lastitem);
                }
            }
        }
        Collections.shuffle(returnArray);
    }

    public final int getGoldBoxReward() {
        return compiledGold.get(Randomizer.nextInt(compiledGold.size()));
    }

    public final int getJxBoxReward() {
        return compiledJxbox.get(Randomizer.nextInt(compiledJxbox.size()));
    }

    public final int getSilverBoxReward() {
        return compiledSilver.get(Randomizer.nextInt(compiledSilver.size()));
    }

    public final int getFishingReward() {
        return compiledFishing.get(Randomizer.nextInt(compiledFishing.size()));
    }

    public final int getEventReward() {
        final int chance = Randomizer.nextInt(100);
        if (chance < 50) {
            return compiledEventC.get(Randomizer.nextInt(compiledEventC.size()));
        } else if (chance < 80) {
            return compiledEventB.get(Randomizer.nextInt(compiledEventB.size()));
        } else if (chance < 95) {
            return compiledEventA.get(Randomizer.nextInt(compiledEventA.size()));
        } else {
            return compiledEvent.get(Randomizer.nextInt(compiledEvent.size()));
        }
    }
}
