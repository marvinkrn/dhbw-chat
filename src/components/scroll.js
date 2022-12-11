export const useScrollToBottom = (ref) => {
    const scrollToBottom = () => {
      ref.current.style.scrollBehavior = "instant";
      ref.current.scrollTop = ref.current.scrollHeight;
    };
  
    return {
      scrollToBottom,
    }
  }