module Jekyll
    module WikiLinkConverter
      def convert_wikilinks(input)
        return input if input.nil?
  
        # Handle [[target|text]]
        input = input.gsub(/\[\[([^\|\]]+)\|([^\]]+)\]\]/) do
          target = Regexp.last_match(1).strip
          text = Regexp.last_match(2).strip
          "[#{text}](/#{slugify(target)})"
        end
  
        # Handle [[target]]
        input = input.gsub(/\[\[([^\]]+)\]\]/) do
          target = Regexp.last_match(1).strip
          "[#{target}](/#{slugify(target)})"
        end
  
        input
      end
  
      private
  
      def slugify(str)
        str.downcase.strip.gsub(/[^\w\s-]/, '').gsub(/\s+/, '-')
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::WikiLinkConverter)
  