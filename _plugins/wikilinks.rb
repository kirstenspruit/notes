# _plugins/wikilinks.rb
Jekyll::Hooks.register [:documents, :pages], :pre_render do |doc|
  doc.content.gsub!(/\[\[([^\|\]]+)\|([^\]]+)\]\]/) do
    "[#{$2}](/#{$1.strip.tr(' ', '-').downcase})"
  end

  doc.content.gsub!(/\[\[([^\]]+)\]\]/) do
    target = $1.strip.tr(' ', '-').downcase
    "[#{$1}](/#{target})"
  end
end
