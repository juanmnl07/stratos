<?php
/**
 * @file
 * HTML template functions.
 */

/**
 * Implements hook_preprocess_html().
 * Meta tags https://drupal.org/node/1468582#comment-5698732
 */
function stratos_theme_preprocess_html(&$variables) {
  $meta_charset = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'charset' => 'utf-8',
    ),
  );
  drupal_add_html_head($meta_charset, 'meta_charset');

  $meta_x_ua_compatible = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'http-equiv' => 'x-ua-compatible',
      'content' => 'ie=edge, chrome=1',
    ),
  );
  drupal_add_html_head($meta_x_ua_compatible, 'meta_x_ua_compatible');

  $meta_mobile_optimized = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'MobileOptimized',
      'content' => 'width',
    ),
  );
  drupal_add_html_head($meta_mobile_optimized, 'meta_mobile_optimized');

  $meta_handheld_friendly = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'HandheldFriendly',
      'content' => 'true',
    ),
  );
  drupal_add_html_head($meta_handheld_friendly, 'meta_handheld_friendly');

  $meta_viewport = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'viewport',
      'content' => 'width=device-width, initial-scale=1',
      //'content' => 'width=1024',
    ),
  );
  drupal_add_html_head($meta_viewport, 'meta_viewport');

  $meta_cleartype = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'http-equiv' => 'cleartype',
      'content' => 'on',
    ),
  );
  drupal_add_html_head($meta_cleartype, 'meta_cleartype');

   // Use html5shiv.
  if (theme_get_setting('html5shim')) {
    $element = array(
      'element' => array(
        '#tag' => 'script',
        '#value' => '',
        '#attributes' => array(
          'type' => 'text/javascript',
          'src' => file_create_url(drupal_get_path('theme', 'stratos_theme') . '/js/html5shiv-printshiv.js'),
        ),
      ),
    );
    $html5shim = array(
      '#type' => 'markup',
      '#markup' => "<!--[if lt IE 9]>\n" . theme('html_tag', $element) . "<![endif]-->\n",
    );
    drupal_add_html_head($html5shim, 'stratos_theme_html5shim');
  }

  // Use Respond.js.
  if (theme_get_setting('respond_js')) {
    drupal_add_js(drupal_get_path('theme', 'stratos_theme') . '/js/respond.min.js', array('group' => JS_LIBRARY, 'weight' => -100));
  }

  // Js Andrey
  drupal_add_js('https://code.jquery.com/ui/1.11.2/jquery-ui.js');
  drupal_add_js(drupal_get_path('theme', 'stratos_theme') . '/js/jquery.transform2d.js', array('group' => CSS_SYSTEM, 'weight' => -100));

  // Use normalize.css
  if (theme_get_setting('normalize_css')) {
    drupal_add_css(drupal_get_path('theme', 'stratos_theme') . '/css/normalize.css', array('group' => CSS_SYSTEM, 'weight' => -100));
  }
}

/**
 * Implements hook_html_head_alter().
 */
function stratos_theme_html_head_alter(&$head_elements) {

  // Remove system content type meta tag.
  unset($head_elements['system_meta_content_type']);
}

/**
 * Implements hook_page_alter().
 * https://gist.github.com/jacine/1378246
 */
function stratos_theme_page_alter(&$page) {
  // Remove all the region wrappers.
  foreach (element_children($page) as $key => $region) {
    if (!empty($page[$region]['#theme_wrappers'])) {
      $page[$region]['#theme_wrappers'] = array_diff($page[$region]['#theme_wrappers'], array('region'));
    }
  }
  // Remove the wrapper from the main content block.
  if (!empty($page['content']['system_main'])) {
    $page['content']['system_main']['#theme_wrappers'] = array_diff($page['content']['system_main']['#theme_wrappers'], array('block'));
  }
}

function stratos_theme_preprocess_node(&$vars) {
  // Add a striping class.
  $vars['classes_array'][] = 'node-' . $vars['zebra'];
}

function stratos_theme_preprocess_field(&$vars) {
  // Add a striping class.
  if ($vars['element']['#field_name'] == 'field_body_beneficios') {
    array_push($vars['classes_array'],"field-beneficios");
    array_push($vars['classes_array'],"beneficios-contenido");
  }

  if ($vars['element']['#field_name'] == 'field_titulo_beneficios') {
    $titulo = $vars['element']['#items'][0]['value'];
    $titulo_plain = strip_tags($titulo);
    $lineas = strlen($titulo_plain)/15;
    $class_row = "tres-lineas";

    if ($lineas <= 1){
      $class_row = "una-linea";
    } else if ($lineas < 3){
      $class_row = "dos-lineas";
    }

    array_push($vars['classes_array'],"beneficios-titulo");
    array_push($vars['classes_array'],"field-beneficios");
    array_push($vars['classes_array'],$class_row);
  }
}

function stratos_theme_preprocess_block(&$vars, $hook) {
  // Add a striping class.
  /*if ($vars['block_id']==2){
    dpm($vars['elements']['#block']); 
  }*/
  $vars['classes_array'][] = 'block-' . $vars['zebra'];

}

function stratos_theme_form_webform_client_form_alter(&$form, $form_state, $form_id) {
  if($form['#node']->nid==2){
    $form['actions']['submit']['#attributes']['id'] = 'edit-webform-ajax-submit-'.$form['#node']->nid;
  }

}
