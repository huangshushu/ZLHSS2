package constants;

import server.ServerProperties;

public class JobConstants {

    public static final boolean enableJobs = true;
    // UI.wz/Login.img/RaceSelect_new/order
    public static final int jobOrder = 184;

    public enum LoginJob {

        冒险家(0),
        皇家骑士团(1),
        狂狼勇士(2),
        ;
        private final int jobType;
        private final boolean enableCreate = true;

        LoginJob(int jobType) {
            this.jobType = jobType;
        }

        public int getJobType() {
            return jobType;
        }

        public boolean enableCreate() {
            return Boolean.valueOf(ServerProperties.getProperty("JobEnableCreate" + jobType, String.valueOf(enableCreate)));
        }

        public void setEnableCreate(boolean info) {
            if (info == enableCreate) {
                ServerProperties.removeProperty("JobEnableCreate" + jobType);
                return;
            }
            ServerProperties.setProperty("JobEnableCreate" + jobType, String.valueOf(info));
        }
    }
}
