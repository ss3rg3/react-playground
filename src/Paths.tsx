export class Paths {
    public static HOME = "/";
    public static HOOKS = "/hooks";
    public static LIBS = "/libs";

    public static hooks = {
        USE_STATE: `${Paths.HOOKS}/use-state`,
        USE_CALLBACK: `${Paths.HOOKS}/use-callback`,
        USE_EFFECT: `${Paths.HOOKS}/use-effect`
    }

    public static libs = {
        REACT_QUERY: `${Paths.LIBS}/react-query`
    }

}
