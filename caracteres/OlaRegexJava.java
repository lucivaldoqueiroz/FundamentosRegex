import java.util.regex.*;

public class OlaRegexJava {

    public static void main(String[] args) {

        String texto = "Casa bonita é casa amarela da esquina com a Rua ACASALAR.";
        Pattern regex = Pattern.compile("casa", Pattern.CASE_INSENSITIVE);
        Matcher matcher = regex.matcher(texto);
        
        while(matcher.find()){
            System.out.printf("Posicoes: %s, %s\tValor: %s%n",
                matcher.start(), matcher.end(), matcher.group());
        }
    }
    
}
